'use client';

import { useEffect, useRef } from 'react';

const ASCII_CHARS = ' .:-=+*#%@';

interface Props {
	src: string;
	detail?: number;
}

export function AsciiArt({ src, detail = 50 }: Props) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	const particles = useRef<{ x: number; y: number }[]>([]);
	const velocities = useRef<{ x: number; y: number }[]>([]);
	const original = useRef<{ x: number; y: number }[]>([]);
	const chars = useRef<{ char: string; color: string }[]>([]);

	const mouse = useRef({ x: -1000, y: -1000 });
	const rafRef = useRef<number>(0);
	const resizeObserverRef = useRef<ResizeObserver | null>(null);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		const canvas = canvasRef.current;
		const img = imageRef.current;
		if (!wrapper || !canvas || !img) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const dpr = window.devicePixelRatio || 1;

		const resizeCanvas = () => {
			const { width, height } = wrapper.getBoundingClientRect();
			if (width === 0 || height === 0) return;

			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const generateAscii = () => {
			const { width, height } = canvas.getBoundingClientRect();
			if (!width || !height) return;

			const aspect = img.naturalHeight / img.naturalWidth;
			const cols = Math.max(20, Math.floor((width / 1200) * detail * 3));
			const rows = Math.floor(cols * aspect);

			const charW = width / cols;
			const charH = charW * 1.1;

			const temp = document.createElement('canvas');
			temp.width = cols;
			temp.height = rows;

			const tctx = temp.getContext('2d');
			if (!tctx) return;

			tctx.drawImage(img, 0, 0, cols, rows);
			const pixels = tctx.getImageData(0, 0, cols, rows).data;

			particles.current = [];
			velocities.current = [];
			original.current = [];
			chars.current = [];

			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < cols; x++) {
					const i = (y * cols + x) * 4;
					const r = pixels[i];
					const g = pixels[i + 1];
					const b = pixels[i + 2];
					const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
					const idx = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1));

					const px = x * charW + charW / 2;
					const py = y * charH + charH / 2;

					particles.current.push({ x: px, y: py });
					velocities.current.push({ x: 0, y: 0 });
					original.current.push({ x: px, y: py });
					chars.current.push({
						char: ASCII_CHARS[idx],
						color: `rgb(${r},${g},${b})`,
					});
				}
			}
		};

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.font = `12px JetBrains Mono, monospace`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';

			for (let i = 0; i < particles.current.length; i++) {
				const p = particles.current[i];
				const v = velocities.current[i];
				const o = original.current[i];

				const dx = p.x - mouse.current.x;
				const dy = p.y - mouse.current.y;
				const dist = Math.sqrt(dx * dx + dy * dy) || 1;

				if (dist < 60) {
					const force = (1 - dist / 60) * 2;
					v.x += (dx / dist) * force;
					v.y += (dy / dist) * force;
				}

				// jiggle
				v.x += (Math.random() - 0.5) * 0.2;
				v.y += (Math.random() - 0.5) * 0.2;

				// damping
				v.x *= 0.92;
				v.y *= 0.92;

				// spring back
				p.x += (o.x - p.x) * 0.08 + v.x;
				p.y += (o.y - p.y) * 0.08 + v.y;

				ctx.fillStyle = chars.current[i].color;
				ctx.fillText(chars.current[i].char, p.x, p.y);
			}

			rafRef.current = requestAnimationFrame(animate);
		};

		const onMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.current.x = e.clientX - rect.left;
			mouse.current.y = e.clientY - rect.top;
		};

		const onLeave = () => {
			mouse.current.x = -1000;
			mouse.current.y = -1000;
		};

		const init = () => {
			resizeCanvas();
			generateAscii();
			animate();
		};

		if (img.complete) init();
		else img.onload = init;

		resizeObserverRef.current = new ResizeObserver(() => {
			resizeCanvas();
			generateAscii();
		});
		resizeObserverRef.current.observe(wrapper);

		window.addEventListener('resize', resizeCanvas);
		canvas.addEventListener('mousemove', onMouseMove);
		canvas.addEventListener('mouseleave', onLeave);

		return () => {
			cancelAnimationFrame(rafRef.current);
			window.removeEventListener('resize', resizeCanvas);
			canvas.removeEventListener('mousemove', onMouseMove);
			canvas.removeEventListener('mouseleave', onLeave);
			resizeObserverRef.current?.disconnect();
		};
	}, [src, detail]);

	return (
		<div ref={wrapperRef} className="relative w-full h-full overflow-hidden">
			<canvas ref={canvasRef} className="absolute inset-0" />
			<img ref={imageRef} src={src} className="hidden" alt="" />
		</div>
	);
}

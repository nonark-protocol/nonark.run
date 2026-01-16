'use client';
import { TextMorph } from '@/components/ui/text-morph';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clipboard } from 'lucide-react';

function CopyButton() {
	const [text, setText] = useState('Copy');
	const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

	useEffect(() => {
		setTimeout(() => {
			setText('Copy');
		}, 2000);
	}, [text]);

	return (
		<button
			onClick={() => {
				setText('Copied');
				navigator.clipboard.writeText(currentUrl);
			}}
			className="font-base flex items-center gap-1 px-3 py-2 text-center text-sm bg-zinc-900 text-zinc-100 rounded-lg transition-colors dark:text-zinc-900 dark:bg-zinc-100"
			type="button">
			<Clipboard size={16} />
			<TextMorph>{text}</TextMorph>
			<span>URL</span>
		</button>
	);
}

export default function LayoutBlogPost({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
			<ScrollProgress
				className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
				springOptions={{
					bounce: 0,
				}}
			/>

			<div className="flex justify-between items-center">
				<Link
					href={'/'}
					className="inline-flex items-center gap-1 px-3 py-2 text-center text-sm bg-zinc-100 text-zinc-500 rounded-lg transition-colors dark:text-zinc-400 dark:bg-zinc-900">
					<ArrowLeft size={16} />
					Go back to home
				</Link>
				<CopyButton />
			</div>
			<main className="prose prose-gray mt-24 pb-20 prose-h4:prose-base dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:mt-16 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium text-[15px] prose-ul:prose-li:list-disc prose-ol:prose-li:list-decimal">
				{children}
			</main>
		</>
	);
}

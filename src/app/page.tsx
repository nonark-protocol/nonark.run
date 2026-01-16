'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Magnetic } from '@/components/ui/magnetic';
import { PROJECTS, EMAIL, SOCIAL_LINKS, ARTICLES } from './data';
import { AnimatedBackground, AsciiArt } from '@/components/ui';

const VARIANTS_CONTAINER = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const VARIANTS_SECTION = {
	hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
	visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION_SECTION = {
	duration: 0.3,
};

function MagneticSocialLink({ children, link }: { children: React.ReactNode; link: string }) {
	return (
		<Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
			<Link
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
				{children}
				<ArrowUpRight size={16} />
			</Link>
		</Magnetic>
	);
}

const BLUR_DATA_URL =
	'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMjAiPjxzdG9wIG9mZnNldD0i';

export default function Personal() {
	return (
		<motion.main className="space-y-24" variants={VARIANTS_CONTAINER} initial="hidden" animate="visible">
			<motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
				<div className="flex-1">
					<p className="px-6 py-3 bg-zinc-50 text-zinc-600 dark:text-zinc-400 dark:bg-zinc-900 rounded-lg">
						A startup - craft delicately structured software products
					</p>
				</div>
			</motion.section>

			<div className="w-full h-[400px] sm:h-[650px]">
				<AsciiArt
					src={
						'data:image/jpeg;base64,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'
					}
				/>
			</div>

			<motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
				<h3 className="mb-5 text-lg font-semibold">Selected Projects</h3>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{PROJECTS.map(project => (
						<Link key={project.name} href={project.link} target="_blank" className="space-y-2">
							<div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
								<Image
									src={project.image}
									alt="Skevv"
									placeholder="blur"
									loading="lazy"
									blurDataURL={BLUR_DATA_URL}
									width={1200}
									height={900}
									className="aspect-12/9 rounded-xl"
								/>
							</div>
							<div className="flex flex-col gap-2 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
								<div className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
									{project.name}
									<span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
								</div>
								<p className="text-xs text-zinc-600 dark:text-zinc-400">{project.description}</p>
							</div>
						</Link>
					))}
				</div>
			</motion.section>

			<motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
				<h3 className="mb-3 text-lg font-semibold">Blog</h3>
				<div className="flex flex-col space-y-0">
					<AnimatedBackground
						enableHover
						className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
						transition={{
							type: 'spring',
							bounce: 0,
							duration: 0.2,
						}}>
						{ARTICLES.map(article => (
							<Link key={article.uid} className="-mx-3 rounded-xl px-3 py-3" href={article.link} data-id={article.uid}>
								<div className="flex flex-col space-y-1">
									<h4 className="font-normal dark:text-zinc-100">{article.title}</h4>
									<p className="text-zinc-500 dark:text-zinc-400">{article.description}</p>
								</div>
							</Link>
						))}
					</AnimatedBackground>
				</div>
			</motion.section>

			<motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
				<h3 className="mb-5 text-lg font-semibold">Contact</h3>
				<p className="mb-5 text-zinc-600 dark:text-zinc-400">
					Feel free to contact me at{' '}
					<Link className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
						{EMAIL}
					</Link>
				</p>
				<div className="flex items-center justify-start space-x-3">
					{SOCIAL_LINKS.map(link => (
						<MagneticSocialLink key={link.label} link={link.link}>
							{link.label}
						</MagneticSocialLink>
					))}
				</div>
			</motion.section>
		</motion.main>
	);
}

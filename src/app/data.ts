import { StaticImageData } from 'next/image';
import SkevvImage from '@/public/project/skevv.webp';
import DesignthouImage from '@/public/project/designthou.webp';

type Project = {
	name: string;
	description: string;
	link: string;
	image: StaticImageData | string;
	id: string;
};

type Article = {
	title: string;
	description: string;
	link: string;
	uid: string;
};

type SocialLink = {
	label: string;
	link: string;
};

export const PROJECTS: Project[] = [
	{
		name: 'Skevv',
		description: 'A lightweight PDF editor - easy to reorder, merge, and compress PDFs',
		link: 'https://skevv.vercel.app',
		image: SkevvImage,
		id: '2026-project1',
	},
	{
		name: 'Designthou',
		description: 'Spatial Content Platform for Architect and Designers',
		link: 'https://designthou.com/',
		image: DesignthouImage,
		id: '2026-project2',
	},
];

export const ARTICLES: Article[] = [
	{
		title: 'Exploring the Intersection of Design, AI, and Design Engineering',
		description: 'How AI is changing the way we design',
		link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
		uid: 'blog-1',
	},
	{
		title: 'Why I left my job to start my own company',
		description: 'A deep dive into my decision to leave my job and start my own company',
		link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
		uid: 'blog-2',
	},
	{
		title: 'What I learned from my first year of freelancing',
		description: 'A look back at my first year of freelancing and what I learned',
		link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
		uid: 'blog-3',
	},
	{
		title: 'How to Export Metadata from MDX for Next.js SEO',
		description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
		link: '/blog/example-mdx-metadata',
		uid: 'blog-4',
	},
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: 'Github',
		link: 'https://github.com/nonark-protocol',
	},
	{
		label: 'LinkedIn',
		link: 'https://www.linkedin.com/company/nonark',
	},
];

export const EMAIL = 'hkkw@proton.me';

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
		title: 'Build Product - What is skevv?',
		description: 'About skevv, a lightweight PDF Editor',
		link: '/blog/what-is-skevv',
		uid: 'blog-1',
	},

	{
		title: 'Sharing Journey - Migrate Wordpress + Php to Next.js + Supabase',
		description: 'Share our journey of migrating from Wordpress + Php to Next.js + Supabase',
		link: '/blog/migrate-wordpress-to-nextjs',
		uid: 'blog-2',
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

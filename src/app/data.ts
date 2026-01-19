import { StaticImageData } from 'next/image';
import SkevvImage from '@/public/project/skevv.webp';
import DesignthouImage from '@/public/project/designthou.webp';
import { config } from '@/constants/url';

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
		link: config.PRODUCT.SKEVV,
		image: SkevvImage,
		id: '2026-project1',
	},
	{
		name: 'Designthou',
		description: 'Spatial Content Platform for Architect and Designers',
		link: config.PRODUCT.DESIGNTHOU,
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
		link: config.OUTER.GITHUB,
	},
	{
		label: 'LinkedIn',
		link: config.OUTER.LINKEDIN,
	},
];

export const EMAIL = 'hkkw@proton.me';

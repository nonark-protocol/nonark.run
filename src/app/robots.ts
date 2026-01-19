import type { MetadataRoute } from 'next';
import { config } from '@/constants/url';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: `${config.baseURL}/sitemap.xml`,
	};
}

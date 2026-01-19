import { config } from '@/constants/url';

const BASE_URL = config.baseURL;

export default function sitemap() {
	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${BASE_URL}/blog`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
	];
}

import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import { config } from '@/constants/url';
import { Footer, Header } from '@/components/layout';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#ffffff',
};

export const metadata: Metadata = {
	metadataBase: new URL(config.baseURL),
	alternates: {
		canonical: '/',
	},
	title: {
		default: 'Nonark',
		template: '%s | Home',
	},
	description: 'A startup that offers structured software products and thoughtfully organized spaces.',
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_ID,
		other: {
			'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_SEARCH_CONSOLE_ID!,
		},
	},
};

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="apple-mobile-web-app-title" content="Nonark" />
				<meta name="msapplication-TileColor" content="ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
				<meta name="robots" content="index, follow" />
			</head>
			<body className={`${inter.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}>
				<ThemeProvider enableSystem={true} attribute="class" storageKey="theme" defaultTheme="system">
					<div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
						<div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
							<Header />
							{children}
							<Footer />
						</div>
					</div>
				</ThemeProvider>
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
				<VercelAnalytics />
			</body>
		</html>
	);
}

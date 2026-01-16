'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/favicon.svg';

export function Header() {
	return (
		<header className="mb-8 flex items-center justify-between">
			<h1 className="w-fit cursor-pointer">
				<Link
					href="/"
					className="inline-flex justify-center items-center gap-2 p-1 h-8 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900 transition-colors cursor-pointer">
					<Image src={Logo} alt={'Logo'} width={24} height={24} priority className="block object-cover" />
					<span className="font-bold font-mono text-2xl">Nonark</span>
				</Link>
			</h1>
		</header>
	);
}

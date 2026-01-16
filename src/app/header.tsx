'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/favicon.svg';

export function Header() {
	return (
		<header className="mb-8 flex items-center justify-between">
			<div>
				<Link
					href="/"
					className="inline-flex items-center gap-2 p-2 h-9 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900 transition-colors">
					<Image src={Logo} alt={'Logo'} width={50} height={50} priority className="block w-full h-full object-cover" />
					<span className="font-bold font-mono text-xl">Nonark</span>
				</Link>
			</div>
		</header>
	);
}

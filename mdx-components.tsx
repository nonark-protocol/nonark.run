import { ArrowUpRight } from 'lucide-react';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react';
import { highlight } from 'sugar-high';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		Cover: ({ src, alt, caption }: { src: string; alt: string; caption: string }) => {
			return (
				<figure>
					<img src={src} alt={alt} className="rounded-xl" />
					<figcaption className="text-center">{caption}</figcaption>
				</figure>
			);
		},
		code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
			const codeHTML = highlight(children as string);
			return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
		},
		ArrowUpRightLink: ({ children, url }: { children: React.ReactNode; url: string }) => {
			return (
				<Link
					href={url}
					target={'_blank'}
					className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-white bg-gray-900 hover:opacity-90 transition-all">
					{children}
					<ArrowUpRight size={15} />
				</Link>
			);
		},
		Callout: ({ children }: { children: React.ReactNode }) => {
			return <blockquote className="px-4 py-3 bg-gray-50 text-gray-600 rounded-lg">{children}</blockquote>;
		},
	};
}

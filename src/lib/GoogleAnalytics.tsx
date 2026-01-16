import Script from 'next/script';
// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-YG0Q24NYWB"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-YG0Q24NYWB');
// </script>

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
			</Script>
		</>
	);
}

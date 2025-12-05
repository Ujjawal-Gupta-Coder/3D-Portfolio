import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import "@/styles/globals.css";

import { PreLoader } from "@/components/Loader";
import { LIVE_LINK } from '@/constants';
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	const title = "Ujjawal Gupta | Software developer";
	const description =
		"Hello! I'm Ujjawal Gupta, a passionate web developer and problem solver. Welcome to my portfolio";
	
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title}></meta>
				<meta property="og:description" content={description} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={LIVE_LINK} />
				<meta property="og:type" content="website" />

				<link rel="canonical" href={LIVE_LINK} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/assets/icons/favicon/site.webmanifest"
				/>
			</Head>

			<ThemeProvider attribute="class" defaultTheme="dark">
					<Component {...pageProps} loading={loading} />
					{loading && <PreLoader />}
					<Analytics />
					<ToastContainer />
			</ThemeProvider>
		</>
	);
}

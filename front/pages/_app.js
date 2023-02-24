// Google Tag Manager Integration Reference:
// https://morganfeeney.com/how-to/integrate-google-tag-manager-with-next-js

import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'pageview',
                page: url,
            });
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

// Google Tag Manager Integration Reference:
// https://morganfeeney.com/how-to/integrate-google-tag-manager-with-next-js

import Head from 'next/head'
import Script from 'next/script'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>COECT</title>
                {/* <meta name="description" content="Your description" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script id="google-tag-manager" strategy="afterInteractive">
            {`
                function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P92NZ3R');
            `}
            </Script>
            <Component {...pageProps} />
        </>
    );
}
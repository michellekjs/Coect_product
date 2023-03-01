import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
       <Head>
          {/* <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css' /> */}
          {/* GTM code snippet */}
          <link href="/fonts/style.css" rel="stylesheet"/>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P92NZ3R');
              `,
            }}
          /> */}
          {/* End GTM code snippet */}
        </Head>
        <body>
          {/* GTM body code */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P92NZ3R"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End GTM body code */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

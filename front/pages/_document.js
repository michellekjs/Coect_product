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
       <Head lang='ko'>
          
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

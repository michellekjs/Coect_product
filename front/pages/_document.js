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

          <link rel="preload" href="../../public/fonts/Pacifico-Bold.woff2" as="font" type="font/woff2" crossorigin/> 
          <link rel="preload" href="../../public/fonts/Pacifico-Bold.eot" as="font" type="font/eot" crossorigin/>  
          <link rel="preload" href="../../public/fonts/Pacifico-Bold.otf" as="font" type="font/otf" crossorigin/>  
          <link rel="preload" href="../../public/fonts/Pacifico-Bold.woff" as="font" type="font/woff" crossorigin/>  

          <link rel="preload" href="../../public/fonts/Pacifico-Light.woff2" as="font" type="font/woff2" crossorigin /> 
          <link rel="preload" href="../../public/fonts/Pacifico-Light.eot" as="font" type="font/eot" crossorigin /> 
          <link rel="preload" href="../../public/fonts/Pacifico-Light.otf" as="font" type="font/otf" crossorigin /> 
          <link rel="preload" href="../../public/fonts/Pacifico-Light.woff" as="font" type="font/woff" crossorigin/>  

          <link rel="preload" href="../../public/fonts/Pacifico-Medium.woff2" as="font" type="font/woff2" crossorigin /> 
          <link rel="preload" href="../../public/fonts/Pacifico-Medium.eot" as="font" type="font/eot" crossorigin/>
          <link rel="preload" href="../../public/fonts/Pacifico-Medium.otf" as="font" type="font/otf" crossorigin />
          <link rel="preload" href="../../public/fonts/Pacifico-Medium.woff" as="font" type="font/woff" crossorigin/> 

          <link rel="preload" href="../../public/fonts/Pacifico-Regular.woff2" as="font" type="font/woff2" crossorigin/> 
          <link rel="preload" href="../../public/fonts/Pacifico-Regular.eot" as="font" type="font/eot" crossorigin/>
          <link rel="preload" href="../../public/fonts/Pacifico-Regular.otf" as="font" type="font/otf" crossorigin/>
          <link rel="preload" href="../../public/fonts/Pacifico-Regular.woff" as="font" type="font/woff" crossorigin/>

          <link rel="preload" href="../../public/fonts/Pacifico-Thin.woff2" as="font" type="font/woff2" crossorigin/> 
          <link rel="preload" href="../../public/fonts/Pacifico-Thin.eot" as="font" type="font/eot" crossorigin/> 
          <link rel="preload" href="../../public/fonts/Pacifico-Thin.otf" as="font" type="font/otf" crossorigin/> 
          <link rel="preload" href="../../public/fonts/Pacifico-Thin.woff" as="font" type="font/woff" crossorigin/> 
          
          
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

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

          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Bold.woff2" as="font" type="font/woff2" crossorigin/> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Bold.eot" as="font" type="font/eot" crossorigin/>  
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Bold.otf" as="font" type="font/otf" crossorigin/>  
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Bold.woff" as="font" type="font/woff" crossorigin/>  

          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Light.woff2" as="font" type="font/woff2" crossorigin /> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Light.eot" as="font" type="font/eot" crossorigin /> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Light.otf" as="font" type="font/otf" crossorigin /> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Light.woff" as="font" type="font/woff" crossorigin/>  

          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Medium.woff2" as="font" type="font/woff2" crossorigin /> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Medium.eot" as="font" type="font/eot" crossorigin/>
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Medium.otf" as="font" type="font/otf" crossorigin />
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Medium.woff" as="font" type="font/woff" crossorigin/> 

          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Regular.woff2" as="font" type="font/woff2" crossorigin/> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Regular.eot" as="font" type="font/eot" crossorigin/>
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Regular.otf" as="font" type="font/otf" crossorigin/>
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Regular.woff" as="font" type="font/woff" crossorigin/>

          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Thin.woff2" as="font" type="font/woff2" crossorigin/> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Thin.eot" as="font" type="font/eot" crossorigin/> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Thin.otf" as="font" type="font/otf" crossorigin/> 
          <link rel="preload" href="../../public/fonts/SpoqaHanSansNeo-Thin.woff" as="font" type="font/woff" crossorigin/> 
          
          
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

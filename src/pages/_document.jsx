import {Html, Head, Main, NextScript} from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

        <link rel="icon" href="/codeyabyab-logo-1.png"/>
        <link rel="manifest" href="/manifest.json"/>

        <meta name="description" content="K Terminal V2"/>
      </Head>

      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

export default Document
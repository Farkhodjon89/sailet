import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
        <Main/>
        <div id='portal'/>
        <NextScript/>
        </body>
      </Html>
  )
}
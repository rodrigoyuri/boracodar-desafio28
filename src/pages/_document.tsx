import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-screen h-screen bg-app-bg bg-no-repeat bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
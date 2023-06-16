
import Head from 'next/head'
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Flumpf</title>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <body >
        {children}
      </body>
    </html>
  )
}

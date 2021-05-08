import Head from 'next/head'
const SEO: React.FC = () => {
  return (
    <Head>
      <title>JcdeA</title>
      <link href="/static/fonts/D2Coding.woff2" rel="preload" as="font" />
      <link href="/static/fonts/D2CodingBold.woff2" rel="preload" as="font" />
      <meta name="description" content="JcdeA's portfolio"></meta>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  )
}
export default SEO

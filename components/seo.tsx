import Head from 'next/head'
const SEO: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>
        {title} - JcdeA{"'"}s Porfolio
      </title>
      <meta name="description" content="JcdeA's portfolio"></meta>

      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-regular.woff2"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-700.woff2"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-500.woff2"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-300.woff2"
        as="font"
        crossOrigin="anonymous"
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  )
}
export default SEO

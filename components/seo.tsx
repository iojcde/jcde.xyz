import Head from 'next/head'
const SEO: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>
        {title} - JcdeA{"'"}s Porfolio
      </title>
      <meta name="description" content="JcdeA's portfolio"></meta>
      <link
        rel="prefetch"
        href="https://github-readme-stats.vercel.app/api?username=JcdeA&count_private=true"
      />
      <link
        rel="prefetch"
        href="https://github-readme-stats.vercel.app/api?username=JcdeA&count_private=true"
      />
      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-regular.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-700.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-500.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/static/fonts/jetbrains-mono-v6-latin-300.woff2"
        as="font"
        type="font/woff2"
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

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
        href="https://github-readme-stats.vercel.app/api?username=JcdeA&count_private=true"
        as="image"
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

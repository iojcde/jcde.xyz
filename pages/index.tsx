import TextLoop from '@jcdea/react-text-loop'
import Link from 'next/link'

export const Home = (): JSX.Element => (
  <div className="container font-roboto-mono prose">
    <h1 className="text-6xl py-2">Hi, I{"'"}m JcdeA</h1>
    <p className="text-xl md:text-2xl">
      <TextLoop interval={2500} className="text-black dark:text-white">
        <span>Next.js</span>
        <span>Full stack</span>
        <span>Python</span>
        <span>Node.js</span>
        <span>Discord.js</span>
        <span>Docker</span>
        <span>Linux</span>
      </TextLoop>{' '}
      Developer building unique experiences
    </p>
    <Link href="/info">More about me</Link>
    <h2 className="text-3xl md:text-4xl pt-10">Teams</h2>
    <p>Team int</p>
  </div>
)

export default Home

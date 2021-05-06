import Link from 'next/link'
import Typewriter from 'typewriter-effect'
export const Home = (): JSX.Element => (
  <div className="container prose">
    <h1 className="text-6xl py-2">Hi, I{"'"}m JcdeA</h1>
    <p className="text-xl md:text-2xl">
      <span className="inline-block">
        <Typewriter
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onInit={() => {}}
          options={{
            strings: ['Next.js', 'TypeScript'],
            autoStart: true,
            delay: 40,
            loop: true,
            cursor: '｜',
            cursorClassName: 'typed-cursor',
          }}
        />
      </span>{' '}
      Developer building unique experiences
    </p>
    <Link href="/info">More about me</Link>
    <h2 className="text-3xl md:text-4xl pt-10">Teams</h2>
    <p>Team int</p>
  </div>
)

export default Home

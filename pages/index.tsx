import TextLoop from '@jcdea/react-text-loop'
export const Home = (): JSX.Element => (
  <div className="container font-roboto-mono prose">
    <h1 className="text-6xl py-2">Hi, I{"'"}m JcdeA</h1>
    <div className="text-2xl">
      <div>
        <TextLoop interval={2500} className="text-black dark:text-white">
          <span>Next.js</span>
          <span>Python</span>
          <span>Node.js</span>
          <span>Discord.js</span>
          <span>Docker</span>
        </TextLoop>{' '}
        Developer building unique experiences
      </div>
      <a>More about me</a>
    </div>
    <div className="text-4xl pt-10">My work</div>
  </div>
)

export default Home

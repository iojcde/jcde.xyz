import Tag from 'components/tag'
import SEO from 'components/seo'

export const About = (): JSX.Element => {
  return (
    <>
      <SEO title="Home" />
      <div className="prose">
        <a href="https://github.com/anuraghazra/github-readme-stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=JcdeA&count_private=true"
            alt="My GitHub stats"
          />
        </a>
        <h1 className="pt-10" id="experience">
          Experience
        </h1>
        <h2>Technologies I use</h2>
        <div className="flex my-2 flex-wrap gap-2">
          <Tag text="Next.js" />
          <Tag text="TypeScript" />
          <Tag text="CSS" />
          <Tag text="HTML" />
          <Tag text="Node.js" />
          <Tag text="Python" />
          <Tag text="Arch Linux" />
          <Tag text="Docker" />
          <Tag text="Kubernetes" />
          <Tag text="Golang" />
          <Tag text="GraphQL" />
          <Tag text="Discord.js" />
        </div>
        <h1 id="environment">Environment</h1>
        <p>I am an avid Arch linux Linux user.</p>
        <h1 id="etc">Etc</h1>
        <p>
          I am also interested in design. I always strive to create great
          looking user interfaces that also function well.
        </p>
        <p>I am also active on Reddit subs such as:</p>
        <ul>
          <li>r/linuxmasterrace</li>
          <li>r/privacy</li>
          <li>r/megumin</li>
          <li>r/goodanimememes and more.</li>
        </ul>
        <h1 id="contacts">Contacts</h1>
        <p>contact me here:</p>
        <ul>
          <li>jcde@jcde.xyz</li>
          <li>io@8106 on Discord</li>
          <li>u/jhc0767 on Reddit</li>
        </ul>
      </div>
    </>
  )
}
export default About

import Tag from 'components/tag'
import SEO from 'components/seo'
import Image from 'next/image'
import Link from 'next/link'

export const About = (): JSX.Element => {
  return (
    <>
      <SEO title="About" />

      <h1 className="font-bold text-4xl">Hello!</h1>
      <p className="pt-4 text-xl">
        I&apos;m JcdeA, a student interested in web development, backend
        development, and systems infrastructure.
      </p>
      <div className="  mt-20 prose">
        <h1 id="experience">Experience</h1>
        <h2>Technologies I use</h2>
        <div className="flex my-2 flex-wrap gap-2">
          <Tag text="Next.js" />
          <Tag text="Tailwindcss" />
          <Tag text="TypeScript" />
          <Tag text="Golang" />
          <Tag text="Rust" />
          <Tag text="HTTP/2" />
          <Tag text="Linux" />
          <Tag text="HTML" />
          <Tag text="Python" />
          <Tag text="Redis" />
          <Tag text="Docker" />
          <Tag text="Kubernetes" />
          <Tag text="GraphQL" />
          <Tag text="Discord.js" />
          <Tag text="..." />
        </div>
      </div>
      <h2 className="text-2xl pt-8 pb-3">My Github stats</h2>
      <a className="" href="https://github.com/anuraghazra/github-readme-stats">
        <Image
          height={195}
          width={495}
          src="https://readme-stats-jcdea.vercel.app/api?username=JcdeA&count_private=true&border_radius=4"
          alt="My GitHub stats"
        />
      </a>
      <a href="https://github.com/anuraghazra/github-readme-stats">
        <Image
          height={190}
          width={350}
          src="https://readme-stats-jcdea.vercel.app/api/top-langs/?username=jcdea&count_private=true&layout=compact&langs_count=8&hide=css&border_radius=4"
          alt="My GitHub stats"
        />
      </a>

      <div className="prose">
        <p className="pt-4">
          I am a self-taught developer. I&apos;m always trying to learn more.
        </p>
        <p className="pt-2">
          My interest in computers started with experimenting with the LEGO
          Mindstorms EV3. I was really fascinated that I could instruct a robot
          to do whatever I want.
        </p>
        <p>
          Even though couldn&apos;t afford the actual robots, I created many
          programs, and imagined running them in my head.
        </p>
        <p>
          After that, I became interested in other languages. I learned Python
          by reading some books at my local library, and searching online.
          Eventually, I reached a point where I could use Python to make
          whatever I want.
        </p>
        <p>
          However, I noticed some limitations that Python had. I learned more
          languages such as Typescript, and more recently golang and rust. I
          also fell in love with linux and it&apos;s simplicity, and switched to
          using Arch Linux as my daily driver.
        </p>
        <p>
          During this period, I also learned more about UI/UX design. I designed
          many production websites for various people.
        </p>
        <p>
          I am currently a member of <a>Team int</a>, a team for teenagers who
          like developing things based in South Korea.
        </p>
        <p>
          I developed the Team website, and am collaborating on other projects.
        </p>
        <p>
          Currently, I do accept orders for designing websites, and other
          things.
        </p>
        <p>
          I am not available for recruitment, though, since I&apos;m not even
          old enough for an internship :(
          <br /> I might collaborate on an open source project, though.
        </p>
        <p>
          Please <a href="#contacts">contact me</a> if you&apos;re interested.
        </p>
        <p>
          Thanks for visiting my website, and reading through this giant wall of
          text!
        </p>
        <h1 id="etc" className="pt-4">
          Interests
        </h1>
        <p>
          I love designing websites, developing backends, and tinkering with
          linux. I enjoy chatting about things I&apos;m interested in.
        </p>
        <p>I also like to read articles and books on technology in general.</p>

        <p>When I&apos;m bored, I like to watch anime or read manga.</p>

        <h1 id="contacts">Contacts</h1>
        <p>Contact me here:</p>
        <ul>
          <li>
            <Link href="mailto:jcde@jcde.xyz">jcde@jcde.xyz</Link>
          </li>
          <li>
            io#8106 @ <Link href="https://discord.com">Discord</Link>
          </li>
          <li>
            u/jhc0767 @ <Link href="https://reddit.com/jhc0767">Reddit</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
export default About

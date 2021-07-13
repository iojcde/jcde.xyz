import SEO from 'components/seo'
import Link from 'next/link'
import React, { useState } from 'react'
import Tag from '../components/tag'

export const Home: React.FC<{ desc: string }> = () => {
  const [data, setData] = useState<string>(
    '<div class="max-w-2xl"><span class="inline-block ">The Student developer&nbsp;</span><span class="inline hover:underline font-bold"><br>your grandparents warned you about.</span></div>'
  )
  const [index, setIndex] = useState<number>(1)

  async function refresh(): Promise<void> {
    fetch(`/api/desc/${index}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setIndex(data.index)
      })
  }
  return (
    <>
      <SEO title="Home" />
      <h1 className="text-5xl mt-6 md:mt-20 py-2">Hi, I{"'"}m JcdeA</h1>
      <div className="text-lg md:text-xl">
        <div className="mb-0">
          <div dangerouslySetInnerHTML={{ __html: data }} />
          <button
            className="text-sm focus:outline-none"
            title="Refresh"
            onClick={refresh}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="hover-rotate "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
              ></path>
            </svg>
          </button>
        </div>
        <Link href="/about">
          {/* w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6  */}
          <div className="bg-red-500 shadow items-center justify-center hover:bg-red-400 text-white inline-flex align-center mt-2 w-auto py-1 px-2 md:py-2 md:px-4  text-sm md:text-lg  mb-8 group hover:pr-2 border border-red-200 border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-500 focus:ring-gray-900 focus:outline-none transition-colors duration-200">
            <span className="text-md leading-7">Learn more</span>
            <svg
              className="h-6 ml-2 md:h-8 md:ml-4  group-hover:ml-2 md:group-hover:ml-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </Link>
      </div>{' '}
      <p className="md:pt-11 text-2xl">Skills</p>
      <div className="flex my-2 flex-wrap gap-2">
        <Tag text="Next.js" />
        <Tag text="Tailwindcss" />
        <Tag text="TypeScript" />
        <Tag text="JavaScript" />
        <Tag text="Golang" />
        <Tag text="Rust" />
        <Tag text="HTTP/2" />
        <Tag text="HTTPS" />
        <Tag text="Linux" />
        <Tag text="Git" />
        <Tag text="Blitz.js" />
        <Tag text="Python" />
        <Tag text="Docker" />
        <Tag text="Kubernetes" />
        <Tag text="GraphQL" />
        <Tag text="Discord.js" />
        <Tag text="..." />
      </div>
      <p className="pt-8 text-2xl ">Contact me:</p>
      <div className="prose pb-20">
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

export default Home

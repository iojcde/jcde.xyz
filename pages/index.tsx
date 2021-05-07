import Link from 'next/link'

export const Home = (): JSX.Element => (
  <>
    <h1 className="text-5xl py-2">Hi, I{"'"}m JcdeA</h1>
    <div className="text-lg md:text-xl">
      <span className="inline-block"></span>
      Student Developer building unique experiences
    </div>
    <Link href="/about">
      {/* w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6  */}
      <div className="bg-red-500 items-center justify-center hover:bg-red-400 text-white inline-flex align-center w-auto py-1 px-2 md:py-2 md:px-4  text-sm md:text-lg mt-6 mb-8 group hover:pr-2 border border-red-200 border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-500 focus:ring-gray-900 focus:outline-none transition-colors duration-200">
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

    <h2 className="title mt-4">Teams</h2>
    <div className="text-xl content link ">
      <Link href="https://github.com/Team-Int">Team int</Link>
    </div>
  </>
)

export default Home

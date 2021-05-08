import Footer from 'components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SEO from 'components/seo'
type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  const router = useRouter()
  const notHome = router.pathname !== '/'
  return (
    <>
      <SEO />
      <div className="font-mono z-10 w-screen px-4 dark:bg-gray-900 transition-colors duration-200 max-w-3xl mx-auto">
        {notHome && (
          <div className="mt-2">
            <Link href="/">
              <div className=" items-center justify-center inline-flex align-center w-auto  md:py-2 md:px-4  text-sm md:text-lg mt-6 mb-8 group hover:pl-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-500 focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                <svg
                  className="transform rotate-180 h-6 mr-2 group-hover:mr-4"
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
                <span className="">Return to home</span>
              </div>
            </Link>
          </div>
        )}
        <main
          className={
            notHome
              ? 'pt-6'
              : 'pt-14 md:pt-20' +
                'container text-md text-gray-800 mx-auto max-w-3xl   dark:text-gray-100  dark:bg-gray-900 z-10 relative transition-colors duration-200'
          }
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

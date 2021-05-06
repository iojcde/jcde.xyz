import Footer from 'components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  const router = useRouter()
  const notHome = router.pathname !== '/'
  return (
    <>
      <div className="font-d2coding z-10 w-screen px-4 dark:bg-gray-900 transition-colors duration-200 max-w-3xl mx-auto">
        {notHome && (
          <div className="mt-2">
            <Link href="/">Return to home</Link>
          </div>
        )}
        <main
          className={
            notHome
              ? 'pt-6'
              : 'pt-14 md:pt-20' +
                'container text-md text-black mx-auto max-w-3xl   dark:text-gray-100  dark:bg-gray-900 z-10 relative transition-colors duration-200'
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

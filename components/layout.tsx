import Footer from 'components/footer'
type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  return (
    <>
      <div className=" z-10 text-white w-screen dark:bg-gray-900 transition-colors duration-200">
        <main className=" mx-auto max-w-3xl  pt-14 md:pt-20 text-white dark:text-gray-100  dark:bg-gray-900 z-10 relative transition-colors duration-200">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

import Link from 'next/link'
const Footer: React.FC = () => {
  return (
    <footer className="max-w-3xl mx-auto relative z-10 w-full pt-8 pb-4 font-light text-gray-600  dark:text-gray-200 tracking-wide">
      <hr />
      <div className=" pt-4 grid grid-cols-3 gap-4 grid-flow-row max-w-lg mx-auto text-sm text-center pb-5">
        <Link href="https://github.com/JcdeA">Github</Link>
        <Link href="https://lab.jcde.xyz">Gitlab</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="pt-2 dark:text-gray-100 md:pt-4 font-light whitespace-pre-wrap text-xs md:text-sm mx-auto text-center text-gray-700 leading-relaxed">
        © {new Date().getFullYear()}{' '}
        <a href="https://github.com/JcdeA">JcdeA</a>, Built with
        <a href="https://nextjs.org"> Next.js </a>
      </div>
    </footer>
  )
}
export default Footer

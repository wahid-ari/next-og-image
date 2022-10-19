import Link from "next/link";
const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1.5"

export default function ConsoleSidebar() {
  return (
    <div className="sm:w-2/6 px-4 mx-auto pt-5">
      <div className="sticky top-[4.5rem]  border-r dark:border-neutral-800">
        <h1 className="dark:text-white font-semibold mb-4">Example</h1>
        <p className="dark:text-white font-semibold text-sm mb-2">Dynamic Image</p>
        <Link href='/example'>
          <a className={linkClassName}>
            ?username=vercel
          </a>
        </Link>
        <Link href='/example/dynamic-image'>
          <a className={linkClassName}>
            ?username=vercel&bg=dark
          </a>
        </Link>
        <p className="dark:text-white font-semibold text-sm mt-3 mb-2">Blog Title</p>
        <Link href='/example/blog/'>
          <a className={linkClassName}>
            ?title=Blog Title A
          </a>
        </Link>
        <Link href='/example/blog/bg'>
          <a className={linkClassName}>
            ?title=Blog Title A&bg=dark
          </a>
        </Link>
        <p className="dark:text-white font-semibold text-sm mt-3 mb-2">Bgjar</p>
        <Link href='/example/bgjar/'>
          <a className={linkClassName}>
            ?bgjar=Blog Title A
          </a>
        </Link>
        <Link href='/example/bgjar/bg'>
          <a className={linkClassName}>
            ?bgjar=Blog Title A&bg=hexagon
          </a>
        </Link>
        <p className="dark:text-white font-semibold text-sm mt-3 mb-2">Cool</p>
        <Link href='/example/cool/'>
          <a className={linkClassName}>
            ?cool=Blog Title A
          </a>
        </Link>
        <Link href='/example/cool/bg'>
          <a className={linkClassName}>
            ?cool=Blog Title A&bg=gray
          </a>
        </Link>
        <p className="dark:text-white font-semibold text-sm mt-3 mb-2">Pattern</p>
        <Link href='/example/pattern/'>
          <a className={linkClassName}>
            ?pattern=Blog Title A
          </a>
        </Link>
        <Link href='/example/pattern/bg'>
          <a className={linkClassName}>
            ?pattern=Blog Title A&bg=japanese
          </a>
        </Link>
      </div>
    </div>
  )
}
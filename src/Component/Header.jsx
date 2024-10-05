'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Header() {
  const pathname = usePathname()
 
  return (
    <nav className='flex justify-center items-center bg-stone-900'>

      <Link className={`link px-3 ${pathname === '/' ? 'active underline' : ''}`} href="/">
        Home
      </Link>

      <Link className={`link px-3 ${pathname === '/contactus' ? 'active underline' : ''}`} href="/contactus">
        Contact Us
      </Link>

      <Link className={`link px-3 ${pathname === '/Dashboard' ? 'active underline' : ''}`} href="/Dashboard">
        Dashboard
      </Link>
 
      <Link
        className={`link px-3 ${pathname === '/aboutus' ? 'active underline' : ''}`} href="/aboutus">
        About US
      </Link>
    </nav>
  )
}
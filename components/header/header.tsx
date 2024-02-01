import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png"

import { LuShoppingCart } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

import { SideDrawer } from "./side-drawer";
import { MobileNav } from "./mobile-nav";
import { AuthModal } from "./auth-drawer";
import { SearchDrawer } from "./search-drawer";


export function SiteHeader() {

  return (
    <>
      <header className='border-b border-[#f3f3f3] w-full bg-white z-10 lg:pb-3 fixed'>
        <div className="container lg:max-w-[90%]">
          <div className="flex justify-between pt-5 pb-2">
            <div className='flex gap-x-4 items-center md:px-2'>
              <SideDrawer />
              <Link href='/' className=""><Image src={logo} alt='logo' className='w-[111px] h-[30px] lg:w-36 lg:h-10' /></Link>
            </div>
            <div className='flex items-center gap-1.5 md:gap-3 px-4 md:px-2 md:grow'>
              <div className='hidden md:flex items-center md:grow md:mx-6 lg:mx-16 xl:mx-40 text-[#757575c2]'>
                <FaSearch className='text-xl absolute left-3' />
                <input type='search' className='w-full border border-[#757575] rounded-[3px] h-11 text-sm leading-6 bg-transparent py-2 pl-9 pr-16 focus:outline-none' placeholder='Search for products, brand or categories' />
                <button className='p-2 bg-orange text-white text-xs font-semibold absolute right-1.5'>Search</button>
              </div>
              <SearchDrawer />
              <AuthModal />
              <Link href='/cart' className='text-xl md:flex md:items-center md:space-x-2 md:border-2 md:border-orange md:rounded-sm md:text-orange p-2'>
                <LuShoppingCart className='' />
                <small className='hidden md:block text-sm font-semibold'>My Cart</small>
                <span className="text-xs font-semibold absolute -top-2.5 md:-top-3 left-3.5 md:left-auto md:-right-2.5 py-0.5 px-2 leading-[initial] bg-destructive text-white p-2 rounded-full">0</span>
              </Link>
            </div>
          </div>
          <MobileNav />
        </div>
      </header>
    </>
  )
}

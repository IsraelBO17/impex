'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/images/logo.png"
import Categories from "./categories";
import { LuUser2 } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

const categories = [
  {name: 'All', href: '/category/all'},
  {name: 'Fashion', href: '/category/fashion'},
  {name: 'Health & Beauty', href: '/category/health & beauty'},
  {name: 'Electronics', href: '/category/electronics'},
  {name: 'Baby Products', href: '/category/baby products'},
  {name: 'Computing', href: '/category/computing'},
  {name: 'Sport & Fitness', href: '/category/sport & fitness'},
  {name: 'Automobile', href: '/category/automobile'},
  {name: 'Home & Offices', href: '/category/home & offices'},
  {name: 'Machinery', href: '/category/machinery'},
  {name: 'Other Categories', href: '/category/others'},
]

const SiteHeader = () => {

  const [sidebar, setsidebar] = React.useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className={` ${sidebar ? 'fixed' : 'hidden'} w-full z-20 h-screen bg-[#272727c4]`} onClick={() => setsidebar(false)}>
        <div className='w-4/5 h-full bg-white flex flex-col p-4'>
          {/* Logo */}
          <div className='flex-none flex items-center gap-x-4'>
            <button type='button' className='text-3xl text-gray-500' onClick={() => setsidebar(false)}><TfiClose /></button>
            <Link href='/'><Image src={logo} alt='logo' className='w-32 h-9' /></Link>
          </div>
          {/* Categories */}
          <div className='flex flex-col gap-y-4 mt-9'>
            <Categories />
            <div className='flex flex-col gap-y-4 mt-9 *:flex *:items-center *:gap-x-3 *:text-sm'>
              <Link href='/'>Contact Us</Link>
              <Link href='/'>Terms & Conditions</Link>
              <Link href='/'>Report Product</Link>
            </div>
          </div>
        </div>
      </div>

      <header className='border-b border-[#f3f3f3] pt-5 w-full bg-white z-10 lg:pb-5'>
        <div className="container lg:max-w-[90%] lg:flex lg:justify-between lg:items-center">

          {/* Base View */}
          <div className="flex justify-between">
            <div className='flex gap-x-4 items-center'>
              <button type='button' className='lg:hidden' onClick={() => setsidebar(true)}><LuMenu  className='ml-1 w-[35px] h-[30px]' /></button>
              <Link href='/'><Image src={logo} alt='logo' className='w-[111px] h-[30px] lg:w-36 lg:h-10' /></Link>  
            </div>
            <div className='flex items-center gap-x-5 px-4 lg:hidden'>
              <LuSearch className='w-[25px] h-[25px]' />
              <LuUser2 className='w-[25px] h-[25px]' />
              <Link href='/cart' className=''><LuShoppingCart className='w-[25px] h-[25px]' /><span className="text-xs font-semibold absolute -top-2.5 left-3.5 py-0.5 px-2 leading-[initial] bg-destructive text-white p-2 rounded-full">0</span></Link>
            </div>
          </div>

          {/* Mobile View Category */}
          <div className='overflow-x-scroll flex text-[#757575] lg:hidden'>
            {categories.map((category) => {
              return (
                <Link 
                  href={category.href} 
                  key={category.name}
                  className={`p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap ${ pathname == encodeURI(category.href) ? 'text-orange border-b-2 border-orange' : ''}`}
                >
                  {category.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop View Search */}
          <div className='hidden lg:flex items-center w-2/5'>
            <FaSearch className='w-4 h-4 text-[#757575c2] absolute left-3' />
            <input type='search' className='w-full border border-[#757575] rounded-[3px] h-10 text-[#757575c2] text-xs font-normal leading-6 bg-transparent py-1.5 pl-9 pr-16' placeholder='Search for products, brand or categories' />
            <button className='p-2 bg-orange text-white text-xs font-semibold absolute right-1'>Search</button>
          </div>

          {/* Desktop View Cart */}
          <div className='hidden lg:flex items-center justify-between gap-x-4'>
            <button className='flex items-center space-x-1'>
              <FaRegUser className='w-4 h-4' />
              <small className='text-xs font-semibold'>Account</small>
              <FaChevronDown className='w-3 h-3' />
            </button>
            <Link href='/cart' className='flex items-center space-x-2 border-2 border-orange rounded-sm text-orange p-2'>
              <LuShoppingCart className='w-4 h-4' />
              <small className='text-xs font-semibold'>My Cart</small>
              <span className="text-xs font-semibold absolute -top-3 -right-2.5 py-0.5 px-2 leading-[initial] bg-destructive text-white p-2 rounded-full">0</span>
            </Link>
          </div>

        </div>
      </header>
    </>
  )
}

export default SiteHeader
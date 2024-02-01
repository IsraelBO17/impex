'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo.png"
import Categories from "./categories";

import { LuUser2 } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const categories = [
  { name: 'All', href: '/category/all' },
  { name: 'Fashion', href: '/category/fashion' },
  { name: 'Health & Beauty', href: '/category/health & beauty' },
  { name: 'Electronics', href: '/category/electronics' },
  { name: 'Baby Products', href: '/category/baby products' },
  { name: 'Computing', href: '/category/computing' },
  { name: 'Sport & Fitness', href: '/category/sport & fitness' },
  { name: 'Automobile', href: '/category/automobile' },
  { name: 'Home & Offices', href: '/category/home & offices' },
  { name: 'Machinery', href: '/category/machinery' },
  { name: 'Other Categories', href: '/category/others' },
]

const SiteHeader = () => {

  const [sidebar, setsidebar] = React.useState(false)
  const [dropdown, setdropdown] = React.useState(false)
  const [searchbar, setsearchbar] = React.useState(false)
  const [authmodal, setauthmodal] = React.useState(false)
  const [authform, setauthform] = React.useState('login')

  function closeauthModal() {
    setauthform('login')
    setauthmodal(false)
  }

  function showauthModal(form: string) {
    if (form == 'login') {
      setauthform('login')
    } else if (form == 'register') {
      setauthform('register')
    } else {
      null
    }
    setauthmodal(true)
  }


  const pathname = usePathname()

  return (
    <>
      <header className='border-b border-[#f3f3f3] w-full bg-white z-10 lg:pb-5 fixed'>
        <div className="container lg:max-w-[90%]">
          <div className="flex justify-between pt-5 pb-2">
            <div className='flex gap-x-4 items-center'>
              <button type='button' className='lg:hidden' onClick={() => setsidebar(true)}><LuMenu className='ml-1 w-[35px] h-[30px]' /></button>
              <Link href='/'><Image src={logo} alt='logo' className='w-[111px] h-[30px] lg:w-36 lg:h-10' /></Link>
            </div>
            <div className='flex items-center gap-x-3 px-4 lg:grow'>
              <div className='hidden lg:flex items-center lg:grow md:mx-16 xl:mx-40 text-[#757575c2]'>
                <FaSearch className='text-xl absolute left-3' />
                <input type='search' className='w-full border border-[#757575] rounded-[3px] h-11 text-sm leading-6 bg-transparent py-2 pl-9 pr-16 focus:outline-none' placeholder='Search for products, brand or categories' />
                <button className='p-2 bg-orange text-white text-xs font-semibold absolute right-1.5'>Search</button>
              </div>
              <button className="text-2xl font-black cursor-pointer lg:hidden" onClick={() => setsearchbar(true)}>
                <LuSearch />
              </button>
              <button className="text-2xl font-black cursor-pointer lg:hidden" onClick={() => setauthmodal(true)}>
                <LuUser2 />
              </button>
              <div>
                <button className='hidden lg:flex items-center space-x-1 p-1.5 text-lg' onClick={() => setdropdown(!dropdown)}>
                  <FaRegUser />
                  <small className='text-sm font-semibold'>Account</small>
                  <FaChevronDown className='text-base' />
                </button>
                <div className={`${dropdown ? 'flex' : 'hidden'} absolute top-10 p-1.5 flex-col gap-3 text-sm bg-white border border-gray-300 rounded w-52`}>
                  <button type="submit" className="bg-orange text-white border border-orange font-semibold py-2 rounded" onClick={() => showauthModal('login')}>Log in</button>
                  <button type="submit" className="bg-white text-orange border border-orange font-semibold py-2 rounded" onClick={() => showauthModal('register')}>Register</button>
                </div>
              </div>
              <Link href='/cart' className='text-xl lg:flex lg:items-center lg:space-x-2 lg:border-2 lg:border-orange lg:rounded-sm lg:text-orange lg:p-2'>
                <LuShoppingCart className='' />
                <small className='hidden lg:block text-sm font-semibold'>My Cart</small>
                <span className="text-xs font-semibold absolute -top-2.5 lg:-top-3 left-3.5 lg:left-auto lg:-right-2.5 py-0.5 px-2 leading-[initial] bg-destructive text-white p-2 rounded-full">0</span>
              </Link>
            </div>
          </div>

          {/* Mobile View Category */}
          <div className='overflow-x-scroll flex text-[#757575] lg:hidden'>
            {categories.map((category) => {
              return (
                <Link
                  href={category.href}
                  key={category.name}
                  className={`p-4 pt-2 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap ${pathname == encodeURI(category.href) ? 'text-orange border-b-2 border-orange' : ''}`}
                >
                  {category.name}
                </Link>
              )
            })}
          </div>

        </div>
      </header>

      {/* Mobile Side bar */}
      <div className={`${sidebar ? 'fixed' : 'hidden'} z-20 w-full h-screen bg-[#272727c4]`} onClick={() => setsidebar(false)}>
        <div className='w-4/5 h-full bg-white flex flex-col p-4'>
          <div className='flex-none flex items-center gap-x-4'>
            <button type='button' className='text-xl font-black text-gray-500' onClick={() => setsidebar(false)}><GrClose /></button>
            <Link href='/'><Image src={logo} alt='logo' className='w-32 h-9' /></Link>
          </div>
          <div className='flex flex-col gap-y-4 mt-9'>
            <Categories />
            <div className='flex flex-col gap-y-4 mt-9 *:flex *:items-center *:gap-x-3 *:text-sm'>
              <Link href='/contact-us' className={`${pathname == '/contact-us' ? 'text-orange font-bold' : ''}`}>Contact Us</Link>
              <Link href='/terms-and-conditions' className={`${pathname == '/terms-and-conditions' ? 'text-orange font-bold' : ''}`}>Terms & Conditions</Link>
              <Link href='/report-policy' className={`${pathname == '/report-policy' ? 'text-orange font-bold' : ''}`}>Report Product</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search bar */}
      <div className={`${searchbar ? 'fixed' : 'hidden'} z-20 w-full h-screen flex flex-col bg-white top-0`}>
        <div className="flex items-center p-4 border-b border-[#b6b6b6] gap-x-1.5">
          <button className="text-xl font-black p-2" onClick={() => setsearchbar(false)}><GrClose /></button>
          <div className='grow flex items-center lg:grow md:mx-16 xl:mx-40 text-[#757575c2]'>
            <input
              type='search'
              className='w-full border border-[#b6b6b6] rounded-[3px] h-11 text-sm font-normal leading-6 bg-transparent py-2 pl-2 pr-9 focus:outline-none'
              placeholder='Search for products, brand or categories'
            />
            <button className='p-2 text-xl font-semibold absolute right-1'><FaSearch /></button>
          </div>
        </div>
        {/* Search Results */}
        <div className="grow p-4 pt-2"></div>
      </div>

      {/* User Register/Login Modal */}
      <div className={`${authmodal ? 'fixed inset-0' : 'hidden'} z-20 w-full h-screen flex flex-col justify-end sm:justify-center sm:items-center bg-[#000000b0]`}>
        <div className={`bg-white p-4 h-[85%] sm:min-w-[425px] flex flex-col transition-transform ease-out duration-300 delay-0 shadow-lg ${authmodal ? 'transform-none' : 'translate-x-0 -translate-y-12'}`}>
          <button type="button" className="absolute -top-6 right-5 p-4 text-xl font-black bg-[#f2f2f2] rounded-full" onClick={closeauthModal}><GrClose /></button>
          <div className="pt-12 pb-3">
            <Image alt="Logo" src={logo} height={75} className="mx-auto" />
          </div>
          <div className="flex items-center py-8 pb-2 justify-center gap-8 text-sm font-bold">
            <button type="button" className={`py-3 px-5 uppercase ${authform == 'login' ? 'border-b-2 text-orange border-orange' : ''}`} onClick={() => setauthform('login')}>Log in</button>
            <button type="button" className={`py-3 px-5 uppercase ${authform == 'register' ? 'border-b-2 text-orange border-orange' : ''}`} onClick={() => setauthform('register')}>Register</button>
          </div>
          {/* Login Form */}
          <form action='' className={`flex-col grow text-sm px-4 pt-6 gap-3 ${authform == 'login' ? 'flex' : 'hidden'}`}>
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="phone-num" className='font-semibold'>Phone Number</label>
              <input type="tel" id="phone-num" placeholder='Enter phone number' className='bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12 focus:outline-none' required />
            </div>
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="password" className='font-semibold'>Password</label>
              <input type="password" id="password" placeholder='Enter password' className='bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12 focus:outline-none' required />
            </div>
            <div className="flex items-center gap-2 py-3">
              <input type="checkbox" name="" id="stay-in" />
              <label htmlFor="stay-in" className="">Stay signed in</label>
            </div>
            <button type="submit" className="uppercase bg-orange text-white font-semibold py-3">Log in</button>

          </form>
          {/* Register Form */}
          <form action='' className={`flex-col grow text-sm px-4 pt-6 gap-3 ${authform == 'register' ? 'flex' : 'hidden'}`}>
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="full-name" className='font-semibold'>Full Name</label>
              <input type="text" id="full-name" placeholder='Enter full name' className='bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12 focus:outline-none' required />
            </div>
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="phone-num" className='font-semibold'>Phone Number</label>
              <input type="tel" id="phone-num" placeholder='Enter phone number' className='bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12 focus:outline-none' required />
            </div>
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="email" className='font-semibold'>Email Address</label>
              <input type="email" id="email" placeholder='Enter email address' className='bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12 focus:outline-none' required />
            </div>
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="password" className='font-semibold'>Password</label>
              <input type="password" id="password" placeholder='Enter password' className='bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12 focus:outline-none' required />
            </div>
            <div className="flex items-center gap-2 py-3">
              <input type="checkbox" name="" id="terms" />
              <label htmlFor="terms" className="">Accept terms & Conditions</label>
            </div>
            <button type="submit" className="uppercase bg-orange text-white font-semibold py-3">Register</button>

          </form>
        </div>
      </div>

    </>
  )
}

export default SiteHeader
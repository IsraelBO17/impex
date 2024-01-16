import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png"
import { LuUser2 } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { IoMenuOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const SiteHeader = () => {
  return (
    <header className='border-b border-[#f3f3f3] pt-5 w-full bg-white z-10 top-0 lg:pb-5'>
      <div className="container lg:max-w-11/12 lg:flex lg:justify-between lg:items-center">

        {/* Base View */}
        <div className="flex justify-between">
          <div className='flex gap-x-4 items-center'>
            <button type='button' className='lg:hidden'><LuMenu  className='ml-1 w-[35px] h-[30px]' /></button>
            <Link href='/'><Image src={logo} alt='logo' className='w-[111px] h-[30px] lg:w-36 lg:h-10' /></Link>  
          </div>
          <div className='flex items-center gap-x-5 px-4 lg:hidden'>
            <LuSearch className='w-[25px] h-[25px]' />
            <LuUser2 className='w-[25px] h-[25px]' />
            <Link href='/' className=''><LuShoppingCart className='w-[25px] h-[25px]' /><span className="text-xs font-semibold absolute -top-2.5 left-3.5 py-0.5 px-2 leading-[initial] bg-destructive text-white p-2 rounded-full">0</span></Link>
          </div>
        </div>

        {/* Mobile View Category */}
        <div className='overflow-x-scroll flex text-[#757575] lg:hidden'>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>All</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Fashion</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Health & Beauty</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Electronics</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Baby Products</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Computing</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Sport and Fitness</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Automobile</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Home and Offices</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Machinery</Link>
          <Link href='/' className='p-4 pb-3 font-semibold text-sm tracking-[inherit] clear-both whitespace-nowrap'>Other Categories</Link>
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
          <Link href='/' className='flex items-center space-x-2 border-2 border-orange rounded-sm text-orange p-2'>
            <LuShoppingCart className='w-4 h-4' />
            <small className='text-xs font-semibold'>My Cart</small>
            <span className="text-xs font-semibold absolute -top-3 -right-2.5 py-0.5 px-2 leading-[initial] bg-destructive text-white p-2 rounded-full">0</span>
          </Link>
        </div>

      </div>
    </header>
  )
}

export default SiteHeader
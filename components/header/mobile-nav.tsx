'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";


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

export function MobileNav() {
  const pathname = usePathname()
  return (
    <div className='overflow-x-scroll flex text-[#757575] md:hidden'>
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
  )
}

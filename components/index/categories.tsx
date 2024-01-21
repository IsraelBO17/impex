'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbHanger } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { IoHardwareChipOutline } from "react-icons/io5";
import { LuBaby } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { LiaTractorSolid } from "react-icons/lia";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";

const categories = [
    {name: 'Fashion', href: '/category/fashion', icon: <TbHanger />},
    {name: 'Health & Beauty', href: '/category/health & beauty', icon: <GiLipstick />},
    {name: 'Electronics', href: '/category/electronics', icon: <IoHardwareChipOutline />},
    {name: 'Baby Products', href: '/category/baby products', icon: <LuBaby />},
    {name: 'Computing', href: '/category/computing', icon: <RiComputerLine />},
    {name: 'Sport & Fitness', href: '/category/sport & fitness', icon: <IoIosFitness />},
    {name: 'Automobile', href: '/category/automobile', icon: <MdOutlineDirectionsCarFilled />},
    {name: 'Home & Offices', href: '/category/home & offices', icon: <GoHome />},
    {name: 'Machinery', href: '/category/machinery', icon: <LiaTractorSolid />},
    {name: 'Other Categories', href: '/category/others', icon: <IoEllipsisHorizontalCircle />},
]


const Categories = () => {

    const pathname = usePathname()

    return (
        <>
            <h5 className='text-destructive text-sm uppercase font-extrabold mb-2'>Categories</h5>
            <div className='flex flex-col gap-y-4 px-2'>
                {categories.map((category) => {
                    return (
                        <Link 
                            href={category.href} 
                            key={category.name} 
                            className={`flex items-center gap-x-3 text-sm py-1 *:text-lg ${ pathname == encodeURI(category.href) ? 'text-orange font-bold' : ''}`}
                        >
                            {category.icon}{category.name}
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Categories
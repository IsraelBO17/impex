import Link from "next/link"
import Image from "next/image"
import logo from "../../public/images/logo.png"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Categories from "../index/categories";
import { LuMenu } from "react-icons/lu";


export function SideDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type='button' className='lg:hidden text-3xl'><LuMenu /></button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>
          <Link href='/'><Image src={logo} alt='logo' className='w-32 h-9' /></Link>
          </SheetTitle>
        </SheetHeader>
            <div className='flex flex-col gap-y-4 mt-9'>
                <Categories sidedrawer />
                <div className='flex flex-col gap-y-4 mt-9 *:flex *:items-center *:gap-x-3 *:text-sm'>
                    <Link href='/contact-us'>Contact Us</Link>
                    <Link href='/terms-and-conditions'>Terms & Conditions</Link>
                    <Link href='/report-policy'>Report Product</Link>
                </div>
            </div>
      </SheetContent>
    </Sheet>
  )
}

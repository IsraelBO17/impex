import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LuSearch } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";


export function SearchDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type='button' className='md:hidden p-2 text-xl font-black'><LuSearch /></button>
      </SheetTrigger>
      <SheetContent side='top' className="h-screen p-0 flex flex-col gap-0">
        <SheetHeader className="">
            <div className="flex items-center p-4 border-b border-[#b6b6b6] gap-x-1.5">
                <SheetClose>
                    <button className="text-xl font-black p-2"><GrClose /></button>
                </SheetClose>
                <div className='grow flex items-center lg:grow md:mx-16 xl:mx-40 text-[#757575c2]'>
                    <input
                        type='search'
                        className='w-full border border-[#b6b6b6] rounded-[3px] h-11 text-sm font-normal leading-6 bg-transparent py-2 pl-2 pr-9 focus:outline-none'
                        placeholder='Search for products, brand or categories'
                    />
                    <button className='p-2 text-xl font-semibold absolute right-1'><FaSearch /></button>
                </div>
            </div>
        </SheetHeader>
        <div className="grow p-2 overflow-y-auto"></div>
            
      </SheetContent>
    </Sheet>
  )
}

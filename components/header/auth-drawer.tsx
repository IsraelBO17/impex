'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../public/images/logo.png"


export function AuthModal() {
  const [value, setvalue] = useState(true)
  return (
    <>
      <Drawer>
        <DrawerTrigger className='md:hidden' asChild>
          <button className='p-2 bg-transparent text-black text-xl font-black'>
            <FaRegUser />
          </button>
        </DrawerTrigger>
        <DrawerContent className='h-[80%]'>
          <DrawerHeader>
            <Image alt="Logo" src={logo} height={75} className="mx-auto" />
          </DrawerHeader>
          <AuthForm value={value} />
        </DrawerContent>
      </Drawer>

      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger className='hidden md:flex' asChild>
            <button className='flex items-center space-x-1 p-1.5 text-lg'>
              <FaRegUser />
              <small className='text-sm font-semibold'>Account</small>
              <FaChevronDown className='text-base' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='p-1.5 w-44 flex flex-col gap-1.5 text-sm border border-gray-300'>
            <DropdownMenuItem className='p-0'>
              <DialogTrigger asChild>
                <button className='w-full bg-orange text-white border border-orange font-semibold py-2 rounded' onClick={()=>setvalue(true)}>Log in</button>
              </DialogTrigger>
            </DropdownMenuItem>
            <DropdownMenuItem className='p-0'>
              <DialogTrigger asChild>
                <button className='w-full bg-white text-orange border border-orange font-semibold py-2 rounded' onClick={()=>setvalue(false)}>Register</button>
              </DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[425px] sm:rounded-none">
          <DialogHeader className='pt-12'>
            <Image alt="Logo" src={logo} height={75} className="mx-auto" />
          </DialogHeader>
          <AuthForm value={value} />
        </DialogContent>
      </Dialog>
    </>
  )

}

function AuthForm({value}:{value: boolean}) {
  return (
    <Tabs defaultValue={value ? 'login':'register'}>
      <TabsList className='w-full h-auto gap-4 bg-inherit'>
        <TabsTrigger value="login" className='rounded-none data-[state=active]:border-b-2 data-[state=active]:border-orange'>Login</TabsTrigger>
        <TabsTrigger value="register" className='rounded-none data-[state=active]:border-b-2 data-[state=active]:border-orange'>Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <form action='' className='flex flex-col grow text-sm px-4 pt-6 gap-3'>
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
      </TabsContent>
      <TabsContent value="register">
        <form action='' className='flex flex-col grow text-sm px-4 pt-6 gap-3'>
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
      </TabsContent>
    </Tabs>
  )
}



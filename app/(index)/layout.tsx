import React from 'react'
import { SiteHeader } from '@/components/header/header'
// import SiteHeader from '@/components/index/header3'
import SiteFooter from '@/components/index/footer'

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <SiteHeader />
        <main className='container px-0 pt-[105px] md:pt-[73px] lg:pt-[85px] pb-3 flex flex-col gap-y-3 md:px-3 md:max-w-[90%] lg:max-w-[90%]'>
          {children}
        </main>
      <SiteFooter />
    </>
  )
}

export default HomeLayout
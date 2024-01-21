import React from 'react'
import SiteHeader from '@/components/index/header'
import SiteFooter from '@/components/index/footer'

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <SiteHeader />
        {children}
      <SiteFooter />
    </>
  )
}

export default HomeLayout
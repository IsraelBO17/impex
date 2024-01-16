import React from 'react'
import SiteHeader from '@/components/main/header'
import SiteFooter from '@/components/main/footer'

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
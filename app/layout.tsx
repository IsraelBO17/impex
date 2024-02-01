import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const open_sans = Open_Sans({ weight: ['300', '400', '500', '600', '700', '800'], style:['normal','italic'], display: 'swap', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impex',
  description: 'Impex E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} bg-[#E5E5E5]`}>
        {children}
      </body>
    </html>
  )
}

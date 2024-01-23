import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { TbPhone } from "react-icons/tb";

const SiteFooter = () => {
  return (
    <footer className='bg-footer text-footer-text px-3'>
        <div className='flex flex-col pt-10 container pb-3 md:max-w-11/12'>

            {/* Socials */}
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {/* Social Media Links */}
                <div>
                    <h6 className='text-xs font-semibold leading-tight mb-4'>Stay Connected</h6>
                    <div className='flex items-center space-x-2 my-1 text-[27px]'>
                        <Link href='/'><FaFacebookSquare /></Link>
                        <Link href='/'><FaInstagram /></Link>
                        <Link href='/'><FaTwitter /></Link>
                        <Link href='/'><FaYoutube /></Link>
                        <Link href='/'><FaWhatsapp /></Link>
                    </div>
                    <p className='text-footer-gray text-[10px] mb-4'>We are always available 24/7</p>
                </div>
                {/* Subscribe to Newsletter */}
                <div>
                    <p className='text-footer-link text-footer-gray mt-2 mb-1'>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <form className='flex items-center'>
                        <span className='text-2xl text-footer-gray absolute left-3'><FaRegEnvelope /></span>
                        <input type='search' className='w-full border border-footer-gray rounded-[3px] h-10 text-footer-gray text-xs font-normal leading-6 bg-transparent py-1.5 pl-10 pr-[80px]' placeholder='Enter email address' />
                        <button className='p-2 bg-orange text-white text-xs font-semibold absolute right-1'>Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Navigation Links */}
            <div className='mt-12 border-t border-footer-gray pt-7 grid grid-cols-2 lg:grid-cols-12'>
                <div className='px-3 my-3 lg:col-span-2'>
                    <h6 className='text-xs font-semibold leading-tight mb-2'>About Impex</h6>
                    <ul className=''>
                        <li><Link href='/contact-us' className='text-footer-link text-footer-gray'>Contact us</Link></li>
                        <li><Link href='/about-us' className='text-footer-link text-footer-gray'>About us</Link></li>
                        <li><Link href='/careers' className='text-footer-link text-footer-gray'>Careers</Link></li>
                        <li><Link href='/terms-and-conditions' className='text-footer-link text-footer-gray'>Terms & Conditoins</Link></li>
                    </ul>
                </div>
                <div className='px-3 my-3 lg:col-span-2'>
                    <h6 className='text-xs font-semibold leading-tight mb-2'>Help Center</h6>
                    <ul className=''>
                        <li><Link href='/how-to-shop' className='text-footer-link text-footer-gray'>How to shop on impex</Link></li>
                        <li><Link href='/report-product' className='text-footer-link text-footer-gray'>Report a product</Link></li>
                        <li><Link href='/delivery-options' className='text-footer-link text-footer-gray'>Delivery Options</Link></li>
                        <li><Link href='/making-payments' className='text-footer-link text-footer-gray'>Making payments</Link></li>
                    </ul>
                </div>
                <div className='px-3 my-3 lg:col-span-2'>
                    <h6 className='text-xs font-semibold leading-tight mb-2'>Business Policies</h6>
                    <ul className=''>
                        <li><Link href='/faqs' className='text-footer-link text-footer-gray'>FAQs</Link></li>
                        <li><Link href='/return-policy' className='text-footer-link text-footer-gray'>Return policy</Link></li>
                        <li><Link href='/' className='text-footer-link text-footer-gray'>Buyer&apos;s protection</Link></li>
                        <li><Link href='/items-policy' className='text-footer-link text-footer-gray'>Authentic Items Policy</Link></li>
                    </ul>
                </div>
                <div className='px-3 my-3 lg:col-span-2'>
                    <h6 className='text-xs font-semibold leading-tight mb-2'>More Info</h6>
                    <ul className=''>
                        <li><Link href='/site-map' className='text-footer-link text-footer-gray'>Site Map</Link></li>
                        <li><Link href='/privacy-policy' className='text-footer-link text-footer-gray'>Privacy policy</Link></li>
                    </ul>
                </div>
                <div className='px-3 pt-10 col-span-2 flex flex-col gap-y-4 lg:cols-span-4 lg:pt-3'>
                    <div className='flex items-center space-x-3'>
                        <span className='bg-white rounded-full p-2 text-footer text-2xl'><FaRegEnvelope /></span>
                        <div className='flex-auto flex flex-col space-y-1'>
                            <h6 className='text-xs font-semibold leading-tight'>Email Support</h6>
                            <p className='text-[10px]'><Link href='/' className=''>sales@impex.com.ng</Link></p>
                        </div>
                    </div> 
                    <div className='flex items-center space-x-3'>
                        <span className='bg-white rounded-full p-2 text-footer text-2xl'><TbPhone /></span>
                        <div className='flex-auto flex flex-col space-y-1'>
                            <h6 className='text-xs font-semibold leading-tight'>Phone Support</h6>
                            <p className='text-[10px]'><Link href='/' className=''>0901 344 5240</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='py-8'>
                <p className='text-[10px] text-center font-semibold'>Copyright ©2024 <Link href='/'>impex.com.ng</Link> all rights reserved</p>
            </div>

        </div>
    </footer>
  )
}

export default SiteFooter
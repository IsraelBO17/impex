import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import envelope from '@/public/images/Envelope-contact.svg'


const breadcrumbs = [
    {label: 'Home', path: '/'},
    {label: 'Contact Us', path: '/contact-us'}
]


const ContactUsPage = () => {
  return (
    <>
        {/* Breadcrumbs */}
        <section className='mt-3 px-3'>
            <Breadcrumbs items={breadcrumbs} />
        </section>

        {/* Contact Us Section */}
        <section className='mb-3 px-3 bg-white'>
            <div className="grid grid-cols-2">
                <div className='col-span-2 p-6 pt-12'>
                    <h3 className='font-extrabold text-2xl uppercase text-center'>Have some questions?</h3>
                    <h6 className='text-center text-sm'>Send us a message and we will get back to you shortly</h6>
                </div>
                <div className='hidden lg:block lg:col-span-1 p-6'>
                    <Image alt='contact us' src={envelope} />
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <form className='flex flex-col gap-y-5'>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="full-name" className='text-sm font-semibold'>Full Name</label>
                            <input type="text" id="full-name" placeholder='Enter Full name' className='text-sm bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12' required />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                            <input type="email" id="email" placeholder='Enter Email' className='text-sm bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12' required />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="subject" className='text-sm font-semibold'>Subject</label>
                            <input type="text" id="subject" placeholder='Enter Subject' className='text-sm bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12' required />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="message" className='text-sm font-semibold'>Message</label>
                            <textarea name="" id="message" rows={10} placeholder='Enter Message here' className='border border-[#ebeaea] py-2 px-3' required></textarea>
                        </div>
                        <button type="submit" className='bg-orange text-sm text-white font-semibold py-3 lg:w-2/5'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUsPage
import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import faqs from '@/public/images/about-us.jpg'


const breadcrumbs = [
    {label: 'Home', path: '/'},
    {label: 'FAQs', path: '/faqs'}
]


const FaqsPage = () => {
  return (
    <>
        {/* Breadcrumbs */}
        <section className='mt-3 px-3'>
            <Breadcrumbs items={breadcrumbs} />
        </section>

        {/* Faqs Section */}
        <section className='mb-3 px-3 bg-white'>
            <div className="grid grid-cols-2">
                <div className='col-span-2 p-6 pt-12'>
                    <h3 className='font-extrabold text-2xl uppercase text-center'>FAQs</h3>
                    <h6 className='text-center text-sm'>Frequently asked questions</h6>
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <Image alt='faqs' src={faqs} />
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <p className='text-sm mb-4 text-justify'>
                        Get all the answers to the most frequently asked questions (FAQs) regarding some of our popular categories which include electronics, mobile phones, computers, fashion, beauty products, home and kitchen,building and construction materials and a whole lot more from premium brands as well as managing your account, payment, vouchers and much, much more.
                    </p>
                    <h5 className='text-xl leading-[1.2] mb-2'><strong>Online questions and answers</strong></h5>
                    <p className='text-sm mb-4 text-justify'>
                        Pickup from Impex nearest outlet in your location, Ensure
                        that you provide us with an active phone number to receive
                        text messages/ calls and endeavor to pickup your parcel from
                        Impex nearest outlet in your location.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default FaqsPage
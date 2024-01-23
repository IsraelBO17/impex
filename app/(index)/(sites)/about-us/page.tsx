import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import about from '@/public/images/about-us.jpg'


const breadcrumbs = [
    {label: 'Home', path: '/'},
    {label: 'About Us', path: '/about-us'}
]


const AboutUsPage = () => {
  return (
    <>
        {/* Breadcrumbs */}
        <section className='mt-3 px-3'>
            <Breadcrumbs items={breadcrumbs} />
        </section>

        {/* About Us Section */}
        <section className='mb-3 px-3 bg-white'>
            <div className="grid grid-cols-2">
                <div className='col-span-2 p-6 pt-12'>
                    <h3 className='font-extrabold text-2xl uppercase text-center'>Who we are?</h3>
                    <h6 className='text-center text-sm'>Why online shoppers prefer us</h6>
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <Image alt='about us' src={about} />
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <h5 className='text-xl leading-[1.2] mb-2'><strong>About Impex</strong></h5>
                    <p className='text-sm mb-4 text-justify'>
                        Impex is an import/export trading company that is mainly into fashion, General logistics, Agriculture, Real Estate, Building Construction, Manufacturing, Oil and Gas, Entertainment, Exchange and Haulage, Impex is committed in ensuring that the whole of Africa gets the best online shopping experience.
                    </p>
                    <h5 className='text-xl leading-[1.2] mb-2'><strong>Business Overview</strong></h5>
                    <p className='text-sm mb-4'>
                        At IMPEX we decided to be one of Nigeria's largest online mall, Our mission at IMPEX is to be committed with the engineering of commerce and trade in Africa to ensuring the customers get the best online shopping experience.
                        <br /><br />
                        We created a retail customer base that continues to enlarge exponentially, offering great products and services that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances, Books, healthcare, Baby Products, personal care and mu
                        <br /><br />
                        Our range of services are designed to ensure optimum levels of comfort and customer satisfaction with our services that include our lowest price guarantee.
                        <br /><br />
                        We are highly committed towards finding innovative ways to improving our customers' shopping experience.
                        <br /><br />
                        We would like a feedback on support@impex.com.ng. For any press related questions, kindly send us an email at info@impex.com.ng    
                        <br /><br />
                        Do enjoy a great experience with us!
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUsPage
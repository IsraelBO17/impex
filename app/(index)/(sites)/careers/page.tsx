import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import careers from '@/public/images/about-us.jpg'


const breadcrumbs = [
    {label: 'Home', path: '/'},
    {label: 'Careers', path: '/careers'}
]


const CareersPage = () => {
  return (
    <>
        {/* Breadcrumbs */}
        <section className='mt-3 px-3'>
            <Breadcrumbs items={breadcrumbs} />
        </section>

        {/* Careers Section */}
        <section className='mb-3 px-3 bg-white'>
            <div className="grid grid-cols-2">
                <div className='col-span-2 p-6 pt-12'>
                    <h3 className='font-extrabold text-2xl uppercase text-center'>Join our team</h3>
                    <h6 className='text-center text-sm'>Let's build the next revolution together</h6>
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <Image alt='careers' src={careers} />
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <h5 className='text-xl leading-[1.2] mb-2'><strong>Why join Impex?</strong></h5>
                    <p className='text-sm mb-4 text-justify'>
                        With Impex your career growth is largely influenced by the professionalism which we have backed with best practices and effective knowledge transfer from across the globe We consistently provide opportunities for our staffs to grow across different roles in the organization as we have placed diversifying value with accustomed knowledge within our organization .  Feel free to join us , send a message to careers@impex.com.ng
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default CareersPage
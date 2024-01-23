import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import delivery from '@/public/images/delivery.jpg'


const breadcrumbs = [
    {label: 'Home', path: '/'},
    {label: 'Report Policy', path: '/return-policy'}
]


const ReturnPolicyPage = () => {
  return (
    <>
        {/* Breadcrumbs */}
        <section className='mt-3 px-3'>
            <Breadcrumbs items={breadcrumbs} />
        </section>

        {/* Report Policy Section */}
        <section className='mb-3 px-3 bg-white'>
            <div className="grid grid-cols-2">
                <div className='col-span-2 p-6 pt-12'>
                    <h3 className='font-extrabold text-2xl uppercase text-center'>Return Policy</h3>
                    <h6 className='text-center text-sm'>Return policy instructions</h6>
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <Image alt='return-policy' src={delivery} />
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <h5 className='text-xl leading-[1.2] mb-2 uppercase'><strong>Step 1:</strong></h5>
                    <p className='text-sm mb-4'>Send a Complaint - Also include pictures of the product that was delivered to support@ Impex.com as a means of evidence.</p>
                    <h5 className='text-xl leading-[1.2] mb-2 uppercase'><strong>Step 2:</strong></h5>
                    <p className='text-sm mb-4'>Return after Authorization - Once your claim is validated, we will provide information on the most suitable means of getting the item from you.</p>
                    <h5 className='text-xl leading-[1.2] mb-2 uppercase'><strong>Step 3:</strong></h5>
                    <p className='text-sm mb-4'>Track Return Status - We will send you a return waybill number, this will enable you to track the status of your return.</p>
                    <h5 className='text-xl leading-[1.2] mb-2 uppercase'><strong>Step 4:</strong></h5>
                    <p className='text-sm mb-4'>Get Resolution - Upon our confirmation of the receipt of the item by the Seller, Impex will assist only by notifying the Seller to resolve the matter as its sole responsibility without any further obligation on Impex.</p>
                    <h5 className='text-xl leading-[1.2] mt-4 mb-2'><strong>Items not eligible for return</strong></h5>
                    <p className='text-sm mb-4'>
                        Products that have been altered from their original or opened by an authorized personnel without permission.<br />
                        Product with tampered or missing serial Universal Product Code numbers (UPC).<br />
                        Perishable goods cannot be returned except a valid reason is raised at the point of delivery with affirmation from the dispatcher.<br />
                        Products damaged due to misuse.<br />
                        Products in beauty, health and personal care category.<br />
                        Jewellery, innerwear, bed sheets, lingerie and socks.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default ReturnPolicyPage
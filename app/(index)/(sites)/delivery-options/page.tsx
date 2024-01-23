import Image from 'next/image'
import Breadcrumbs from '@/components/index/breadcrumb'
import delivery from '@/public/images/delivery.jpg'


const breadcrumbs = [
    {label: 'Home', path: '/'},
    {label: 'Delivery Options', path: '/delivery-options'}
]


const DeliveryOptionsPage = () => {
  return (
    <>
        {/* Breadcrumbs */}
        <section className='mt-3 px-3'>
            <Breadcrumbs items={breadcrumbs} />
        </section>

        {/* Delivery Options Section */}
        <section className='mb-3 px-3 bg-white'>
            <div className="grid grid-cols-2">
                <div className='col-span-2 p-6 pt-12'>
                    <h3 className='font-extrabold text-2xl uppercase text-center'>Delivery options</h3>
                    <h6 className='text-center text-sm'>Order delivery options and duration information</h6>
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <Image alt='careers' src={delivery} />
                </div>
                <div className='col-span-2 lg:col-span-1 p-6'>
                    <h5 className='text-xl leading-[1.2] mb-2'><strong>3 to 15 days after purchase</strong></h5>
                    <p className='text-sm mb-4 text-justify'>
                        Free delivery nationwide
                    </p>
                    <h5 className='text-xl leading-[1.2] mb-2'><strong>Delivery method</strong></h5>
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

export default DeliveryOptionsPage
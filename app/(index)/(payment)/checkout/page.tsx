import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/index/breadcrumb'
import { TbTruckDelivery } from "react-icons/tb";
import { TbCreditCard } from "react-icons/tb";
import paystack from '@/public/images/paystack-wc.png'


const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Checkout', path: '/checkout' }
]


const CheckoutPage = () => {
    return (
        <>
            {/* Breadcrumbs */}
            <section className='mt-3 px-3'>
                <Breadcrumbs items={breadcrumbs} />
            </section>

            {/* Checkout Section */}
            <section className='mb-3'>
                <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-11 gap-x-3">
                    <div className='bg-white lg:col-span-8 flex flex-col gap-y-5 p-3'>

                        <h5 className='text-destructive text-sm uppercase font-extrabold'>Checkout</h5>
                        <form className="flex flex-col gap-y-4 px-1">
                            <div className='flex flex-col'>
                                {/* Shipping Address Form */}
                                <div className='flex items-center gap-x-2'>
                                    <span className='p-2 rounded-full bg-[#dddddd] text-[#5B5B5B] text-2xl font-black'>
                                        <TbTruckDelivery />
                                    </span>
                                    <h6 className='uppercase text-sm font-bold text-[#5B5B5B]'>Shipping Address</h6>
                                </div>
                                <div className='border-l border-[#dddddd] pt-3 pr-3 pb-12 pl-7 ml-5'>
                                    <p className='text-sm'>Already have an account? <Link href='' className='text-orange'>Sign in</Link></p>
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='mt-4 flex flex-col gap-y-1'>
                                            <label htmlFor="full-name" className='text-sm font-bold'>Full Name</label>
                                            <input type="text" id="full-name" placeholder='Enter Full name' className='text-sm bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12' required />
                                        </div>
                                        <div className='mt-4 flex flex-col gap-y-1'>
                                            <label htmlFor="email" className='text-sm font-bold'>Email Address</label>
                                            <input type="email" id="email" placeholder='Enter email address' className='text-sm bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12' required />
                                        </div>
                                        <div className='mt-4 flex flex-col gap-y-1'>
                                            <label htmlFor="phone" className='text-sm font-bold'>Mobile number</label>
                                            <input type="tel" id="phone" placeholder='Enter mobile number' className='text-sm bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3 h-12' required />
                                        </div>
                                        <div className='mt-4 flex flex-col gap-y-1'>
                                            <label htmlFor="address" className='text-sm font-bold'>Address</label>
                                            <textarea name="" id="address" rows={2} placeholder='Enter Address' className='text-sm bg-[#F2F2F2] border border-[#ebeaea] py-2 px-3' required></textarea>
                                        </div>
                                        <div className='mt-4 flex flex-col gap-y-1'>
                                            <label htmlFor="state" className='text-sm font-bold'>State</label>
                                            <select name="state" id="state" className='text-sm bg-[#f2f2f2] border border-[#ebeaea] py-2 px-3 h-12' defaultValue=''>
                                                <option value="" disabled>Please select</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment method Form */}
                                <div className='flex items-center gap-x-2'>
                                    <span className='p-2 rounded-full bg-[#dddddd] text-[#5B5B5B] text-2xl font-black'>
                                        <TbCreditCard />
                                    </span>
                                    <h6 className='uppercase text-sm font-bold text-[#5B5B5B]'>Payment method</h6>
                                </div>
                                <div className='py-3 pr-3 pl-7 ml-5 flex flex-col gap-y-2'>
                                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='flex items-center gap-x-2'>
                                                <input type="radio" name="payment-method" id="card" />
                                                <label htmlFor="card" className='text-sm font-bold'>Pay with Debit/Credit Cards</label>
                                            </div>
                                            <Image alt='secure payment' src={paystack} width={200} />
                                        </div>
                                        <div className="flex flex-col gap-x-2">
                                            <div className='flex items-center gap-x-2'>
                                                <input type="radio" name="payment-method" id="cash" />
                                                <label htmlFor="cash" className='text-sm font-bold'>Cash on Delivery</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Place Order Button */}
                                    <button type="submit" className='mt-4 bg-orange text-sm text-white font-semibold py-2 lg:w-2/5'>Place Order</button>

                                </div>
                            </div>
                        </form>                        
                    </div>

                    <div className='lg:col-span-3'>
                        <div className='bg-white flex flex-col gap-y-2 p-3'>
                            <h5 className='text-destructive text-sm uppercase font-extrabold'>Your Order</h5>
                            <div className='flex flex-col gap-y-2 px-1'>
                                <div className="flex justify-between items-center">
                                    <h5 className=''>Subtotal</h5>
                                    <h5 className='font-semibold'>&#x20A6; 100</h5>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h5 className=''>Shipping</h5>
                                    <h5 className='font-semibold'>&#x20A6; 100</h5>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <h5 className='font-bold'>Total</h5>
                                    <h5 className='font-bold text-destructive'>&#x20A6; 200</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckoutPage
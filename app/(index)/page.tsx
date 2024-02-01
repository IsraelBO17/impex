import MainSlide from "@/components/index/mainSlide"
import Categories from "@/components/index/categories";
import FlashSales from "@/components/products/flash-sales";
import RecommendedProducts from "@/components/products/recommended-products";
import MoreProducts from "@/components/products/more-products";

import { TbDiscount2 } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { TbCreditCard } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";

const HomePage = () => {
  return (
    <>
      {/* Main Carousel, Desktop Side Nav, Side Carousel  */}
      <section className='px-3 mt-3 md:p-0'>
        <div className='grid lg:grid-cols-10 lg:gap-x-3 xl:grid-cols-12'>
          {/* Desktop Side Nav */}
          <div className='hidden lg:block lg:h-96 xl:h-[500px] col-span-3 xl:col-span-2 bg-white p-2 rounded shadow-lg overflow-y-scroll'>
            <Categories />
          </div>
          {/* Main Carousel */}
          <div className='lg:col-span-7 xl:col-span-8 shadow-lg'>
            <MainSlide />
          </div>
          {/* Side Carousel */}
          <div className='hidden xl:flex flex-col gap-y-3 col-span-1 xl:col-span-2'>
            <div className="bg-white rounded shadow lg h-1/2"></div>
            <div className="bg-white rounded shadow lg h-1/2"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='hidden xl:block bg-white py-4 shadow-lg'>
        <div className="grid grid-cols-4 gap-x-3 px-3">
          {/* Great value items */}
          <div className="flex items-center gap-x-2">
            <span className='p-2 bg-gray-200 rounded-full text-2xl'>
              <TbDiscount2 />
            </span>
            <div className='flex flex-col justify-items-center'>
              <h5 className='text-sm font-bold mb-0.5'>Great value items</h5>
              <p className='text-[10px]'>Most extensive sale of retail brand, covering hundreds of household consumable items.</p>
            </div>
          </div>
          {/* Seamless shopping */}
          <div className="flex items-center gap-x-2">
            <span className='p-2 bg-gray-200 rounded-full text-2xl'>
              <TbShoppingBag />
            </span>
            <div className='flex flex-col justify-items-center'>
              <h5 className='text-sm font-bold mb-0.5'>Seamless Shopping</h5>
              <p className='text-[10px]'>We offer wide range of products that fits every type of personality and shopping taste.</p>
            </div>
          </div>
          {/* Secure payment */}
          <div className="flex items-center gap-x-2">
            <span className='p-2 bg-gray-200 rounded-full text-2xl'>
              <TbCreditCard />
            </span>
            <div className='flex flex-col justify-items-center'>
              <h5 className='text-sm font-bold mb-0.5'>Secure payment</h5>
              <p className='text-[10px]'>When you make payment with any available pay option, you can be rest assured about your security.</p>
            </div>
          </div>
          {/* Nationwide Delivery */}
          <div className="flex items-center gap-x-2">
            <span className='p-2 bg-gray-200 rounded-full text-2xl'>
              <TbTruckDelivery />
            </span>
            <div className='flex flex-col justify-items-center'>
              <h5 className='text-sm font-bold mb-0.5'>Nationwide delivery</h5>
              <p className='text-[10px]'>We offer fast and effective delivery to every location in Nigeria within 2-3 working days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <FlashSales />

      {/* Recommended for you */}
      <RecommendedProducts />

      {/* More Products for you */}
      <MoreProducts />
    </>
  )
}

export default HomePage
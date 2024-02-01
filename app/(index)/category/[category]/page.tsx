import Image from 'next/image'
import Categories from '@/components/index/categories';
import TopProducts from '@/components/products/top-products';
import CategoryProducts from '@/components/products/category-products';
import s5 from '@/public/slides/5.jpg'


const ProductPage = ({params}: {params: {category: string}}) => {
  const category = decodeURIComponent(params.category);
  return (
    <>
      {/* Side Nav, Category Banner */}
      <section className='px-3 mt-3 md:p-0'>
        <div className='grid lg:grid-cols-10 lg:gap-x-3'>
          {/* Side Nav */}
          <div className='hidden lg:block lg:h-96 xl:h-full col-span-3 xl:col-span-2 bg-white p-4 pt-6 rounded shadow-lg overflow-y-auto'>
            <Categories />
          </div>
          {/* Category Banner */}
          <div className='lg:col-span-7 xl:col-span-8 shadow-lg'>
            <Image src={s5} alt='slide-5' className='h-full sm:h-auto lg:h-96 xl:h-full' />
          </div>
        </div>
      </section>

      {/* Top Products */}
      <TopProducts category={category} />

      {/* Category Products */}
      <CategoryProducts category={category} />
    </>
  )
}

export default ProductPage
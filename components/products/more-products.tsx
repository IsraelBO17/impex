import {ItemSkeleton, ItemCard} from '../index/itemskeleton'

// const axios = require('axios').default

async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products/category/smartphones?limit=10&select=id,title,images,description,price')
    const data = await response.json()
    return data.products
  } catch (error) {
    console.error(error);
  }

}

type ItemProps = {
  id: number,
  title: string,
  images: string[],
  description: string,
  price: number
}

type Item = {
  item?: ItemProps
}

type Product = {
  product: Item[]
}

async function MoreProducts(){

  const products: Product =  await getProducts()

  console.log(products)

  return (
    <section className='bg-white shadow-lg mb-3 rounded'>
        {/* Container */}
        <div className='flex flex-col p-3 xl:p-4 gap-y-2 xl:gap-y-4'>
          <h3 className='text-destructive text-sm uppercase font-extrabold'>More products for you</h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {/* { products.map((item) => {
              return (
                <ItemCard key={item.id} item={item} />
              )
            })
          } */}
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
          </div>
        </div>
      </section>
  )
}

export default MoreProducts
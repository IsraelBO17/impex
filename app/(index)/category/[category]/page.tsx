import React from 'react'

const ProductPage = ({params}: {params: {category: string}}) => {
  const category = decodeURIComponent(params.category);
  return (
    <main>
      {category}
    </main>
  )
}

export default ProductPage
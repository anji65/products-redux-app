import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function ProductComponent() {

  const products = useSelector((state) => state.allProducts.products)

  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;

    return (
      <div className='four wide column' key={id}>
        <Link to={`product/${id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={image} alt={image} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    // <div className='four column wide'>
    //   <div className='ui link cards'>
    //     <div className='card'>
    //       <div className='image'></div>
    //       <div className='content'>
    //         <div className='header'>{name}</div>
    //       </div>
    //     </div>
    //   </div> 
    // </div>
    <>{renderList}</>
  )
}

export default ProductComponent
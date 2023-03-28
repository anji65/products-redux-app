import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/ProductActions'

function ProductDetail() {
  const dispath = useDispatch()
  const product = useSelector((state) => state.signleProduct)
  console.log(product)
  const { title, image, price, category, description } = product
  const { productId } = useParams()

  const fetchProductDetails = async () => {
    const responce = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      })
    dispath(selectedProduct(responce.data))
    console.log(responce.data);
  }

  useEffect(() => {
    if (productId && productId !== " ") fetchProductDetails()
    return () => {
      dispath(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className='ui grid container' style={{marginTop:30}}>
      {
        Object.keys(product).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center align grid'>
              <div className='ui vertical divider'>AND</div>
              <div className='middle aligned row'>
                <div className='column lp'>
                  <img className='ui fluid image' src={image} />
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h3>
                    <a className='ui teal tag label'>$ {price}</a>
                  </h3>
                  <h4 className='ui brown black header'>{category}</h4>
                  <p>{description}</p>
                  <div className='ui vertical animated button' tabIndex="0">
                    <div className='hidden content'>
                      <i className='shop icon'></i>
                    </div>
                    <div className='visible content'>Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProductDetail
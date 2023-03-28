import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/ProductActions'
function ProductListing() {
    const dispath = useDispatch()
    // const products = useSelector((state) => state.allProducts.products)

    const fetchProducts = async () => {
        let responce = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err);
            })
        dispath(setProducts(responce.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='ui grid container'
            style={{ marginTop: 30 }}
        >
            <ProductComponent />
        </div>
    )
}

export default ProductListing

// 'https://fakestoreapi.com/products'
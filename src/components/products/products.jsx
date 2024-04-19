
'use client'
import { useEffect, useState } from 'react';
import { getProducts } from '../../../services/api';
import { ProductList } from './ProductList';

// Define the React component for displaying products
// This component will only render data passed via props
const Products = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        getProducts().then((response) => {
            setData(response)
        
        }).catch((e) => {
console.log(e);
        });

    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-items-center">
            <ProductList productList={data} />
        </div>
    );
};


export default Products;


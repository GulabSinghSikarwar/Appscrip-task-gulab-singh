"use client"
import ProductCard from "./ProductCard"
export const ProductList = (props) => {
    return (
        <>
        {props?.productList?.map((data) => {
            return (
                <ProductCard key={data.id} product={data} />
            )
        })}
        </>
    )
}
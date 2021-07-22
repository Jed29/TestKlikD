import React from 'react'

export default function ListProduct(props) {
    return (
        <>
            <option>{props.product.product_name}</option>
        </>
    )
}

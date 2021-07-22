import React from 'react'

export default function Unit(props) {
    return (
        <>
            {
                props.product.units.map(unit=>{
                    return (<option>{unit.name}</option>)
                })
            }
        </>
    )
}

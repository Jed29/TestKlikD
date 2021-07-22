import React from 'react'

export default function SelectName(props) {
    return (
        <>
            <option value={props.data.employee_name}>{props.data.employee_name}</option>
        </>
    )
}


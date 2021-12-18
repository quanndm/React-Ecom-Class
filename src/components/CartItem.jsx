import React from 'react'

const CartItem = () => {
    return (
        <tr>
            <th scope="row">
                <img src="https://via.placeholder.com/100" alt="" />
            </th>
            <td>Iphone 13 Pro Max</td>
            <td>12000000</td>
            <td>
                <i className="far fa-plus-square fs-3" style={{
                    cursor: "pointer"
                }} />
                <span style={{
                    display: "block",
                    fontSize: "1.2rem"
                }}>1</span>
                <i className="far fa-minus-square fs-3" style={{
                    cursor: "pointer"
                }} />
            </td>
            <td>22000000</td>
            <td>
                <i className="fas fa-trash fs-3" style={{
                    cursor: "pointer"
                }}></i>
            </td>
        </tr>
    )
}

export default CartItem

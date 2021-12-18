import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = (props) => {
    // const {item} = props
    return (
        <div className="col" style={{ textAlign: 'center' }}>
            <div className="card h-100">
                <Link to={`/product/${"1"}`}>
                    <img src="https://via.placeholder.com/200" className="card-img-top" alt="" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">San pham A</h5>
                    <p className="card-text" style={{ color: 'red' }}>
                        <b>$500</b>
                    </p>
                    <p className="card-text">mo ta</p>
                    <button type="button" className="btn btn-outline-secondary" style={{ bottom: 20 }} >
                        Xem Chi tiet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem

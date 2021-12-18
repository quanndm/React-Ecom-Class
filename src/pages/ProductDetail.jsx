import React from 'react'
// import PropTypes from 'prop-types'
import {useNavigate } from 'react-router-dom'
const ProductDetail = (props) => {
    // const {maSP} = props;
    const navigate = useNavigate();
    return (
        <div className="container product-detail">
            <div className="row mt-5 mb-5">
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12  d-flex justify-content-center">
                    <img src="https://via.placeholder.com/320x380" alt="" />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12 co-xs-12">
                    <div className="title">
                        <h2>San pham a</h2>
                    </div>
                    <div className="detail">
                        <span>Thong so chi tiet</span>
                        
                        <p>man hinh: </p>
                        <p>He dieu hanh: </p>
                        <p>camera truoc: </p>
                        <p>camera sau: </p>
                        <p>chip: </p>
                        <p>ram: </p>
                        <p>mau sac: </p>
                    </div>
                    <div className="btn-handler">
                        <button className="btn btn-primary text-white">
                            Them vao gio hang
                        </button>
                        <button className="btn btn-primary text-white " onClick={()=>{navigate("/product")}}>
                            Tiep tuc mua sam
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <h2 className="text-center">Mo ta san pham</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis, asperiores facilis magnam repudiandae non eligendi fugit deserunt. Nam fugit voluptatibus perspiciatis dicta impedit odit neque illo. Perspiciatis, error saepe?
                </p>
            </div>
        </div>
    )
}


export default ProductDetail


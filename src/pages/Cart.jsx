import React from 'react'
import CartItem from '../components/CartItem'
import Helmet from '../components/Helmet'
const Cart = () => {
    return (
        <Helmet title="cart">
            <div className="container mb-5">
                <span className="mt-2 d-block">Yout cart Item</span>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table text-center">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">qty</th>
                                        <th scope="col">subtotal</th>
                                        <th scope="col">remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                </tbody>
                                <tfoot className="bg-light">
                                    <tr>
                                        <th scope="col"><h3>Total</h3></th>
                                        <td colSpan="3"></td>
                                        <td >123213213123</td>
                                        <td></td>
                                    </tr>

                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 offset-lg-8 col-md-6 offset-md-6 col-sm-12">
                        <div className="btn-handler d-flex justify-content-between">
                            <button className="btn btn-danger">
                                xoa gio hang
                            </button>
                            <button className="btn btn-primary">
                                Tiep tuc mua hang
                            </button>
                            <button className="btn btn-primary">
                                Thanh toan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>

    )
}

export default Cart

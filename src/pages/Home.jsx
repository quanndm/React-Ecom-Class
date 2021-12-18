import React from 'react'
import Helmet from '../components/Helmet'
import Slider from '../components/Slider'
import CardItem from '../components/CardItem'
const Home = () => {
    return (
        <Helmet title="Home page">
            <div className="container">
                <Slider />
                {/* main section */}
                <div className="row">
                    <h1 style={{ textAlign: "center", marginTop:"8px" }}>ĐIỆN THOẠI KHUYẾN MÃI</h1>
                    <div className="row row-cols-1 row-cols-md-4 g-4" style={{marginTop:"0px", marginBottom: "10px"}}>
                        {/* render du lieu khuyen mai */}
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                    </div>
                </div>
                <div className="row">
                    <h1 style={{ textAlign: "center" }}>ĐIỆN THOẠI MỚI NHẤT</h1>
                    <div className="row row-cols-1 row-cols-md-4 g-4" style={{marginTop:"0px", marginBottom: "10px"}}>
                        {/* render du lieu moi nhat */}
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Home

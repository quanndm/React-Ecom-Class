import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="bg-light text-dark">
            <div className="container">
                {/*Bắt Đầu Nội Dung Giới Thiệu*/}
                <div className="noi-dung about">
                    <h2>Về Chúng Tôi</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor id esse maiores nulla praesentium debitis quis ipsa! Dolores nihil doloribus vero eligendi perspiciatis, quibusdam delectus, quam incidunt distinctio reiciendis laborum voluptate, sequi veniam. Labore hic ex, inventore quidem incidunt minus deleniti odio explicabo ab iste consectetur dolorem corporis magnam. Earum!</p>
                    <ul className="social-icon">
                        <li><Link to="#"><i className="fab fa-facebook" /></Link></li>
                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                    </ul>
                </div>
                {/*Kết Thúc Nội Dung Giới Thiệu*/}
                {/*Bắt Đầu Nội Dung Đường Dẫn*/}
                <div className="noi-dung links">
                    <h2>Đường Dẫn</h2>
                    <ul>
                        <li><Link to="#">Trang Chủ</Link></li>
                        <li><Link to="#">Về Chúng Tôi</Link></li>
                        <li><Link to="#">Thông Tin Liên Lạc</Link></li>
                        <li><Link to="#">Dịch Vụ</Link></li>
                        <li><Link to="#">Điều Kiện Chính Sách</Link></li>
                    </ul>
                </div>
                {/*Kết Thúc Nội Dung Đường Dẫn*/}
                {/*Bắt Đâu Nội Dung Liên Hệ*/}
                <div className="noi-dung contact">
                    <h2>Thông Tin Liên Hệ</h2>
                    <ul className="info">
                        <li>
                            <span><i className="fa fa-map-marker" /></span>
                            <span>Đường Số 1<br />
                                Quận 1, Thành Phố Hồ Chí Minh<br />
                                Việt Nam</span>
                        </li>
                        <li>
                            <span><i className="fa fa-phone" /></span>
                            <p><Link to="#">+84 123 456 789</Link>
                                <br />
                                <Link to="#">+84 987 654 321</Link></p>
                        </li>
                        <li>
                            <span><i className="fas fa-envelope" /></span>
                            <p><Link to="#">diachiemail@gmail.com</Link></p>
                        </li>
                        <li>
                            <form className="form">
                                <input type="email" className="form__field" placeholder="Đăng Ký Subscribe Email" />
                                <button type="button" className="btn btn--primary uppercase">Gửi</button>
                            </form>
                        </li>
                    </ul>
                </div>
                {/*Kết Thúc Nội Dung Liên Hệ*/}
            </div>
        </footer>
    )
}

export default Footer

import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import img from '../imgs/image2.jpg'
export default function HomePage() {
    return (
        <div style={{}}>
            <section className="hero">
                <div className="hero-content">
                    <h1>Find your bicycle faster than ever before.</h1>
                    <p>
                        Welcome to ParkWise, a toolkit for finding your bicycle among many other.
                    </p>
                    <div className="hero-buttons">
                        <Button><Link to={'/userLogin'}>User</Link></Button>
                        <Button><Link to={'/adminLogin'}>Admin</Link></Button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={img} alt="multiple bicycles parked in their stand, in a room" style={{ width: '30vw', marginLeft: '60%' }} />
                </div>
            </section>

            <section className="features">
                <div className="feature-item">
                    <div className="icon">🌐</div>
                    <h3>Built for public parking spaces</h3>
                    <p>Limited space, high demand, insufficient availability, overcrowding, unsafe conditions, and poor maintenance are common problems with public parking.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">📱</div>
                    <h3>Available across devices</h3>
                    <p>Solutions offers seamless access, synchronization, and functionality on smartphones, tablets, and desktops.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">📑</div>
                    <h3>Complete parking solution</h3>
                    <p>A complete parking solution app offers reservation, navigation, payment, availability tracking, and real-time updates for convenient parking management.</p>
                </div>
            </section>

            <footer class="footer">
                <div class="container">
                    <div class="contact-info">
                        <div class="info-item">
                            <p>+91 930306850</p><strong>sourav@gmail.com</strong>
                        </div>
                        <div class="info-item">
                            <p>+91 923323850</p><strong>rishav@gmail.com</strong>
                        </div>
                        <div class="info-item">
                            <p>+91 912323350</p><strong>tanmoy@gmail.com</strong>
                        </div>
                    </div>
                    <div class="about-company">
                        <h2>About the company</h2>
                        <p>We provide innovative parking solutions through technology,</p>
                        <p>offering seamless experiences with reservation, navigation, </p>
                        <p>and real-time updates for users.</p>
                        {/* <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-github"></i></a>
                        </div> */}
                    </div>
                </div>
            </footer >

        </div >
    )
}

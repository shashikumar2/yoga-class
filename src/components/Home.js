import React from 'react'

function Home() {
    return (
            <div className="firstpage">
                <div className= "logo">
                        <img src = "logo1.jpg" alt="logo"/>
                </div>
                <div className="navbar">        
                    <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT US</a></li>
                            <li className="services"><a href="#">SERVICES</a></li>
                            <li><a href="#">CONTACT US</a></li>
                    </ul>
                </div>
                <div className="firstpageItems">
                <div className="posterMain">
                <img src = "poster-main.jpg" alt="poster"/>
                </div>
                <div className="mainContent">
                <h2>YOGA CLASS</h2><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi-</p>
                    <p> scing elit.Donec fringilla neque euismod volut-</p>
                    <p> pat curus. Vestibulum ac pretium orci.</p><br/>
                    <button>JOIN NOW</button>
                </div>
                </div>
            </div>
    )
}

export default Home

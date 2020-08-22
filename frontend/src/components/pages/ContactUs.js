import React from 'react'
import '../../App.css'

export function ContactUs() {
    return(
      <section id="about">
        <div className="about container">
        <div className="col-left">
            <div className="about-img">
            <img src="images/contact-us.jpg" alt="img"/>
            </div>
        </div>
        <div className="col-right">
            <h1 className="section-title">Contact <span>Us</span></h1>
            <h2>Oracle Builders</h2>
            <ul className="address">
              <li>86  Canis Heights Drive</li>
              <li>Los Angeles</li>
              <li>California</li>
              <li>90071</li>
              <li>213-627-9801</li>
              <li>213-627-9801</li>
              <li>abcd.efg@hijk.lmn</li>
            </ul>

        </div>
        </div>
      </section>
    )

}
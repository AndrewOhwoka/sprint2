
import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../img/about.jpg'

export default function About() {
  return (
    <div className='about'>
      <div className="inside-container">
        <div className="about-center">
          <div className="about-img">

            <img src={aboutImg} alt="" />
          </div>
          
        

          <div className="about-info">
            <p>
            The appreciation for African heritage, especially through the medium of vibrant and unique African fabrics, has found a universal resonance. Wearing these textiles to church and social gatherings has consistently attracted admiration and sparked curiosity, highlighting the universal appeal of such beautiful materials. This widespread positive response has led to the idea of sharing these textiles more broadly, making a piece of African culture accessible to all at an affordable price. This initiative aims to introduce these fabrics, allowing people everywhere to embrace and celebrate African traditions in their own way.

            The African fabrics curated for this purpose are not mere textiles; they represent a vibrant celebration of African culture, known for their deep cultural significance and versatility. Ideal for crafting anything one can imagine, from clothing to home decor, these fabrics are a testament to the adaptability and appeal of African aesthetics. They serve not just as a bridge between African traditions and the diverse cultures of the world but as a colorful thread weaving together a tapestry of global cultural exchange.

            This venture transcends mere commerce; it's a journey of cultural sharing and integration, encouraging communities everywhere to explore and embrace African heritage. The goal is to foster an environment where cultures can coexist and flourish, contributing to a richer, more diverse global tapestry. By offering affordable, versatile, and vibrant African fabrics, this initiative invites people from all walks of life into a dialogue of diversity and unity, driven by a passion to share, connect, and enrich the world with the beauty of African heritage.

            </p>

            <div className="btn-options">
              <Link to="/products">   
              <button className="back-products"> Back to Products</button></Link>
            </div>

          </div>

        </div>
       

      </div>


    </div>
  )
}

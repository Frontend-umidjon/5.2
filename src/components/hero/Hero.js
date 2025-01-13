import React from 'react'
import './Hero.scss'


const Hero = ({title, img, btnColor, btnText, textColor }) => {
  return (
    <section className='hero' style={{background: `url(${img}) center center/cover no-repeat `}}>
       <div className="container">
       <div className="hero__content" style={{color: textColor}}>
            <h1 className="hero__title">
                {title}
            </h1>
            <p className="hero__text">
            Hello, Apple Intelligence.
            </p>
            <div className="hero__actions">
                <button className="hero__btn" style={{background: btnColor, color: btnText, border: `1px solid ${btnColor}`}}>
                    Learn More
                </button>
                <button className="hero__btn" style={{ color: btnColor, border: `1px solid ${btnColor}`, background: 'transparent'}}>
                    Buy Now
                </button>
            </div>
       </div>
        </div>
    </section>
  )
}

export default Hero
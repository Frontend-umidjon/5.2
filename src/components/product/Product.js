import React from 'react'
import './Product.scss'

    const Product = ( {title, img, text, subtext, bottom, textWidth, textColor}) => {
      console.log(img);
      
  return (
    <section className='product' style={{background: `url(${img}) center bottom/cover no-repeat `}}>
       <div className="container">
       <div className="product__content" style= {{color: textColor}}>
            <h1 className="product__title"> {title}</h1>
            <p className="product__text" style={{width: textWidth}}>{text}</p>
            <p className='product__subtext'>{subtext}</p>
            <div className="product__actions">
                <button className='product__btn'>Learn more</button>
                <button className='product__btn'>Try it free</button>
            </div>
           
       </div>
        </div>
        <p className='product__bottom'>{bottom}</p>
    </section>
  )
}

export default Product
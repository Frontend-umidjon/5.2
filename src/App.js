
import React from 'react';
import './App.css';
import { HERO } from './static';
import { IoLogoApple } from "react-icons/io";
import Product from './components/product/Product';
import { PRODUCTS } from './static';
import Header from './components/header/Header'; 
import Hero from './components/hero/Hero';


function App() {
    console.log(PRODUCTS);
    
  
  return (
     <div className="App">
     <Header />

     <Hero  title="iPhone 16 Pro"   img={HERO[0]} btnColor="#0071E3" btnText="white" textColor="white" />
     <Hero  title="iPhone 16"  img={HERO[1]} btnColor="white" btnText="black"  textColor="white" />
     <Hero  title={<><IoLogoApple/>Watch</>} img={HERO[2]} btnColor="#0071E3" btnText="white" textColor="black" />
     <div className='products' style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
      <Product title={<><IoLogoApple/>Fitness+</> } img={PRODUCTS[0]} text= "Fitness for everyone. Personalized for you." subtext="Get up to 3 months on us."
      bottom={null}  textWidth= '195px' textColor='black'/> 

      <Product  title={<>iPad <span className='air'>air</span></>} img={PRODUCTS[1]} text= "Two sizes. Faster chip. Does it all." subtext={null} bottom='Hello, Apple Intelligence' textWidth= {null} textColor='black'/>

      <Product  title={'MacBook Pro'} img={PRODUCTS[2]} text= "A work of smart." subtext={null} bottom='Hello, Apple Intelligence' textWidth= {null} textColor='white'/>

      <Product  title={<><IoLogoApple/>Watch</>} img={PRODUCTS[3]} text= "New finish. Never quit." subtext={null} bottom='Hello, Apple Intelligence' textWidth= {null} textColor='white'/>

      <Product  title={<><IoLogoApple/>Trade In</>} img={PRODUCTS[4]} text= "Get $180–$650 in credit when you
trade in iPhone 12 or higher.2" subtext={null} bottom={null} textWidth= '314px' textColor='black'/>

      <Product  title={<><IoLogoApple/>Card</>} img={PRODUCTS[5]} text= "Get up to 3% Daily Cash back
with every purchase." subtext={null} bottom={null} textWidth= '266px' textColor='black'/>

     </div>
    </div>
  );
}

export default App;

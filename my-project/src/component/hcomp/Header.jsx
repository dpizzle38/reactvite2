import React from 'react';
import logo from "../../assets/Images/logo.png";
import Button from '../Button';



const Header = ({title, spending}) => {
  return (
    <>
    <div className="w-[100%] h-[100%] md:w-[100%] md:h-[100%] relative">
    <header className="bg-cover bg-center min-h-screen"
    style={headingStyle}
   >
      <nav className="flex items-center text-white px-4 pt-4">
        <div>
          <img src = {logo}  
          className='ml-12 pt-3'
          />
        </div>
        <ul className='flex text-[25px] ml-8 space-x-6'>
          <li>Products</li>
          <li>Subscription</li>
          <li>Why Nura ?</li>
          <li>Support</li>
        </ul>
        <div className="ml-auto">
        <span>Cart</span>
        <span>(0)</span>
        </div>
      </nav>
    <div className='absolute bottom-20 transform translate-x-[250%] translate-y-[0px]'>
      <h4 className='text-white'>{title}</h4>
      <h1 className='text-white text-[70px] relative right-[110rem]'>{spending}</h1>
      <Button content = "SHOP SALE NOW" className="text-[#171717] bg-white px-3 py-2 rounded-full relative right-[60rem]"/>
    </div>
      
    </header>
    
    </div>
    </>
)
}

const headingStyle = {
  backgroundImage : "url('../src/assets/Images/hero.png')",
}

Header.defaultProps = {
 title :   "OUR BIGGEST SALE NOW LIVE",
 spending : "Black Friday Starts Now!"
}

export default Header





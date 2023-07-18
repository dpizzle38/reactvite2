import React from 'react'
import logo from '../../assets/Images/logo.png'


const Footer = () => {
  return (
    <>
    <div className='w-[100%] h-[100%] md:w-[100%] md:h-[100%] bg-[#000]'>
        <footer className='flex'>
        <div>
            <img src={logo} />
            <p className='text-[#fff]'>Nura design headphones <br /> tuned to you. Bringing you <br /> closer to music with <br /> personalized sound.</p>
        </div>

        
         <ul className=''>
                <li className='text-[#737373]'>SHOP</li>
                <li className='text-[#fff]'><a href="#">NuraTrue Pro</a></li>
                <li className='text-[#fff]'><a href="#">Audio Transmitter</a></li>
                <li className='text-[#fff]'><a href="#">NuraTrue</a></li>
                <li className='text-[#fff]'><a href="#">NuraBuds</a></li>
                <li className='text-[#fff]'><a href="#">NuraPhone</a></li>
                <li className='text-[#fff]'><a href="#">NuraLoop</a></li>
                <li className='text-[#fff]'><a href="#">Accessories</a></li>
                <li className='text-[#fff]'><a href="#">Subscription</a></li>
         </ul>
        
        <ul>
            <li className='text-[#737373]'>Info</li>
            <li className='text-[#fff]'><a href="#">Why Nura ?</a></li>
            <li className='text-[#fff]'><a href="#">Shipping</a></li>
            <li className='text-[#fff]'><a href="#">Returns</a></li>
            <li className='text-[#fff]'><a href="#">Warranty</a></li>
            <li className='text-[#fff]'><a href="#"></a>Patents</li>
           
        </ul>

        <ul>
            <li className='text-[#737373]'>SUPPORT</li>
            <li className='text-[#fff]'> <a href="#">Help Centre</a></li>
            <li className='text-[#fff]'> <a href="#">Contact Us</a></li>
        </ul>

        <ul>
            <li className='text-[#737373]'>SOCIALS</li>
            <li className='text-[#fff]'><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Tidal</a></li>
            <li></li>
            <li></li>
        </ul>
        </footer>
    </div>
    </>
  )
}

export default Footer
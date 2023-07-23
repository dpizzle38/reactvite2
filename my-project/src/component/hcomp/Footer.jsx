import React from 'react'
import logo from '../../assets/Images/logo.png'


const Footer = () => {
  return (
    <>
    <div className='w-[100%] h-[100%] md:w-[100%] md:h-[100%] bg-[#000]'>
        <footer className='flex gap-[8rem] pb-[6rem]'>
        <div className='leading-8'>
            <img className='ml-[2rem] pt-[3rem]' src={logo} />
            <p className='text-[#fff] ml-[2rem] pt-[1.5rem]'>Nura design headphones <br /> tuned to you. Bringing you <br /> closer to music with <br /> personalized sound.</p>
        </div>

        
         <ul className='pt-[3rem] leading-8'>
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
        
        <ul className='pt-[3rem] leading-8'>
            <li className='text-[#737373]'>Info</li>
            <li className='text-[#fff]'><a href="#">Why Nura ?</a></li>
            <li className='text-[#fff]'><a href="#">Shipping</a></li>
            <li className='text-[#fff]'><a href="#">Returns</a></li>
            <li className='text-[#fff]'><a href="#">Warranty</a></li>
            <li className='text-[#fff]'><a href="#"></a>Patents</li>
           
        </ul>

        <ul className='pt-[3rem] leading-8'>
            <li className='text-[#737373]'>SUPPORT</li>
            <li className='text-[#fff]'> <a href="#">Help Centre</a></li>
            <li className='text-[#fff]'> <a href="#">Contact Us</a></li>
        </ul>

        <ul className='pt-[3rem] leading-8'>
            <li className='text-[#737373]'>SOCIALS</li>
            <li className='text-[#fff]'><a href="#">Instagram</a></li>
            <li className='text-[#fff]'><a href="#">Facebook</a></li>
            <li className='text-[#fff]'><a href="#">YouTube</a></li>
            <li className='text-[#fff]'><a href="#">Tidal</a></li>
            <li className='text-[#fff]'><a href="#">Twitter</a></li>
            <li className='text-[#fff]'><a href="#">Discord</a></li>
        </ul>

        
        </footer>
        <div>
            <p className='text-[#737373] ml-[2rem] relative bottom-[2rem]'>Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.
</p>
        </div>
    </div>
    </>
  )
}

export default Footer
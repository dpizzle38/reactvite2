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
         </ul>
        
        </footer>
    </div>
    </>
  )
}

export default Footer
import React from 'react'
import nuraheadphone from '../../assets/Images/nuraheadphone.png'
import nuraphonepercent from '../../assets/Images/nuraphonepercent.png'
import nuratruepercent from '../../assets/Images/nuratruepercent.png'
import nuratrue from '../../assets/nuratrue.png'
import nurabuds from '../../assets/Images/nurabuds.png'
import nurabluetooth from '../../assets/Images/nurabluetooth.png'
import Button from '../Button'
import {FaArrowRight } from "react-icons/fa";

const Discount = () => {
  return (
    <>
    <div className="bg-[#171717] px-3 h-[100%] w-[100%] py-12">
        <div className='flex gap-[33rem] pt-[3rem]'>
        <p className='text-[63px] text-[#fff]'>Featured discounts</p>
        <a className='text-[16px] text-[#7DFB5D] relative flex items-center gap-[0.5rem]' href="#">VIEW ALL DISCOUNTS <FaArrowRight /> </a>
        </div>
        <section className='flex space-x-4 pt-[2.5rem]'>
          <div className='bg-[#e5e5e5] rounded-2xl'>
            <img src={nuraheadphone}/>
            <img className='relative bottom-[17rem] left-[1.5rem]' src={nuraphonepercent} />
            <p className='relative bottom-[5rem] left-[4.5rem] text-[30px] font-bold'>Nuraphone</p>
            <p className='relative bottom-[4rem] left-[4.5rem]'> 
              <span className=' text-[#ACACAC]'>$399</span>
              <span className='text-[#000]'>$299.25</span>
            </p>
            <Button content="SHOP NOW"
                    className="bg-[#3333F5] text-[1rem] text-[#fff] flex items-center gap-[0.3rem] rounded-full relative bottom-[3rem] px-7 py-2 left-[4rem] "
            />
             </div>
          <div className='bg-[#e5e5e5] rounded-2xl'>
            <img src={nuratrue} />
            <img className='relative bottom-[17rem] left-[1.5rem]'  src={nuratruepercent} />
            <p className='font-bold relative bottom-[5rem] left-[4.5rem] text-[30px]'>NuraTrue</p>
            <p className='relative bottom-[4rem] left-[4.5rem] '>
            <span className='text-[#ACACAC]'>$199.99</span>  
            <span className='text-[#000]'>$399.99</span>
            </p>              
            <Button content="SHOP NOW"
                    className="bg-[#3333F5] text-[1rem] gap-[0.3rem] flex items-center text-[#fff] rounded-full relative bottom-[3rem] px-7 py-2 left-[4rem] "
            />
          </div>
          <div className='bg-[#e5e5e5] rounded-2xl'>
            <img src={nurabuds} />
            <img className='relative bottom-[17rem] left-[1.5rem]' src={nuraphonepercent} />
           <p className='relative bottom-[5.5rem] font-bold left-[4.5rem] text-[30px]'>NuraBuds 2</p>
            <p className='relative bottom-[4rem] left-[4.5rem]'>
              <span className='text-[#ACACAC]'>$119</span>
              <span className='text-[#000]'>$89.25</span>
            </p>
            <Button content="SHOP NOW"
                    className="bg-[#3333F5] text-[1rem] text-[#fff] gap-[0.3rem] rounded-full flex items-center relative bottom-[3rem] px-7 py-2 left-[4rem] "
            />
            </div>
          <div className='bg-[#e5e5e5] rounded-2xl'>
            <img src={nurabluetooth} />
            <img className='relative bottom-[17rem] left-[1.5rem]'  src={nuraphonepercent} />
            <p className='relative bottom-[5rem] font-bold left-[2rem] text-[30px] leading-6'>Nura Bluetooth 5.3 <br /> Audio Transmitter</p>
            <p className='relative bottom-[4rem] left-[4.5rem]'>
              <span className='text-[#ACACAC]'>$59</span>
              <span>$44.25</span>
            </p>
            <Button content="SHOP NOW"
                    className="bg-[#3333F5] text-[1rem] text-[#fff] rounded-full relative bottom-[3rem] flex items-center gap-[0.3rem] px-7 py-2 left-[4rem] "
            />
          </div>
        </section>

        
        
        
    </div>
    </>
  )
}

const discountStyle = {
    backgroundImage : "url('../src/assets/Images/nuraheadphone.png')",
    backgroundImage : "url('../src/assets/Images/nuraphonepercent.png')",
    backgroundImage : "url('../src/assets/Images/nuratruepercent.png')",
    backgroundImage : "url('../src/assets/nuratrue.png')",
    backgroundImage : "url('../src/assets/Images/nurabuds.png')",
    backgroundImage : "url('../src/assets/Images/nurabluetooth.png')",
}

export default Discount

import React from 'react'
import Button from '../Button'

const Subscription = ({title}) => {
  return (
   <>
   <div className='h-[100%] w-[100%] md:w-[100%] md:h-[100%] '>
    <div className='bg-center min-h-screen' style={subscriptionStyle}>
        <h3 className='text-[#fff] text-[2rem] relative top-[16rem] left-[18rem]'>{title}</h3>
        <p className="text-[#fff] text-[2rem] relative top-[16rem] left-[18rem]">Experience personalized sound across our devices on a <br /> low monthly fee with Nuranow. Cancel anytime.</p>
        < Button className= "text-[#fff] text-[2rem] bg-[#3333F5] px-3 py-2 rounded-full relative top-[20rem] left-[26rem]" content = "DISCOVER NURANOW"/>
    </div>
   </div>
   </>
  )
};

const subscriptionStyle ={
    backgroundImage : "url('../src/assets/Images/blur.png')"
}

Subscription.defaultProps = {
    title : "A Sound Subsription"
}

export default Subscription
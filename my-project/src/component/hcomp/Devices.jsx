import React from 'react'

const Devices = () => {
  return (
    <>
    <div className='bg-[#0d0b0b] w-[100%] h-[100%] md:w-[100%] md:h-[100%] '>
      <div className="bg-no-repeat bg-center h-[850px]  " style={deviceStyle}> 
      
        <span className='relative top-[270px] left-[44rem] text-[#fff] text-[63px] leading-10'>Play from <br /> any device.</span>
        <p className='text-[#fff] text-[30px] relative top-[290px] left-[44rem] leading-8'>Your hearing profile is stored on the <br /> earbuds, and is applied to whatever you <br /> listen to, on any device. </p>
        <p className='text-[#fff] text-[30px] leading-9 relative top-[300px] left-[44rem] mt-6'>Use the Nura app to create a hearing <br /> profile, configure touch buttons, adjust <br /> immersion mode and more.</p>
    </div>

   
    </div>
    </>
  )
}

const deviceStyle = {
  backgroundImage: "url('../src/assets/Images/cock.png')",
  
}



export default Devices
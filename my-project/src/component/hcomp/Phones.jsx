import React from 'react'
import div from '../../assets/Images/div.png'
import Button from '../Button';

const Phones = () => {
  return (
    <>
<div className='flex h-[700px] space-x-4 bg-[#3381F5] '>
<img className=" h-[800px] w-[600px]" src={div}/>
<div className='relative top-[8rem]'>
    <p className='text-[#fff] text-5xl'>
        For your <br /> ears only.
    </p>
    <p className='pt-4 text-[#fff] text-2xl'>Normal hearing varies significantly from <br /> person to person and these variations <br /> make a big difference to how you <br /> experience music.</p>
    <p className='pt-4 text-[#fff] text-2xl'>The first time you use Nura earbuds, <br /> they measure your hearing to create <br /> your personalized hearing profile.</p>
    <Button content = "LEARN MORE" className="text-white border border-white px-3 py-2 mt-4 rounded-full"/>
</div>
</div>

    </>
  )
}

export default Phones

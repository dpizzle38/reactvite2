import React from 'react'
import nuraheadphone from '../../assets/Images/nuraheadphone.png'
import nuraphonepercent from '../../assets/Images/nuraphonepercent.png'
import nuratruepercent from '../../assets/Images/nuratruepercent.png'
import nuratrue from '../../assets/nuratrue.png'
import nurabuds from '../../assets/Images/nurabuds.png'
import nurabluetooth from '../../assets/Images/nurabluetooth.png'

const Discount = () => {
  return (
    <>
    <div className="bg-[#171717] px-3 h-[100%] w-[100%] py-12 ">
        <div className='flex justify-between pt-[5rem]'>
        <h3>
            Featured discounts
        </h3>
        <a href="#">VIEW ALL DISCOUNTS</a>
        </div>
        <section className='flex space-x-4'>
          <div className='bg-[#e5e5e5] h-[450px] rounded-2xl'>
            <img src={nuraheadphone}/>
            <img className='relative bottom-[17rem] left-[1.5rem]' src={nuraphonepercent} />
            </div>
          <div className='bg-[#e5e5e5] rounded-2xl'>
            <img src={nuratrue} />
            <img className='relative bottom-[17rem] left-[1.5rem]'  src={nuratruepercent} />
          </div>
          <div className='bg-[#e5e5e5] rounded-2xl'>
            <img src={nurabuds} />
            <img className='relative bottom-[17rem] left-[1.5rem]' src={nuraphonepercent} />
            </div>
          <div className='bg-[#e5e5e5] rounded-2xl'>
            <img src={nurabluetooth} />
            <img className='relative bottom-[17rem] left-[1.5rem]'  src={nuraphonepercent} />
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

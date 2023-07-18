import React from 'react'


const Youtube = () => {
  return (
    <>
    <div className='bg-[#0d0b0b] w-[100%] h-[100%] md:w-[100%] md:h-[100%]'>
        <div className='bg-no-repeat bg-center h-[850px]' style = {youtubeStyle}>

        </div>
    </div>
    </>
  )
}

const youtubeStyle = {
    backgroundImage : "url('../src/assets/Images/youtubeplaceholder.png')"
}

export default Youtube
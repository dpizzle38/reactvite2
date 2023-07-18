import React from 'react'
import forbes from "../../assets/sponsors/forbes.png"
import wired from "../../assets/sponsors/wired.png"
import techradar from "../../assets/sponsors/techradar.png"
import techcrunch from "../../assets/sponsors/techcrunch.png"
import pitchfork from "../../assets/sponsors/pitchfork.png"
import rollingstone from "../../assets/sponsors/rollingstone.png"
import engadget from "../../assets/sponsors/engadget.png"
import wallstreetjournal from "../../assets/sponsors/wallstreetjournal.png"
import gq from "../../assets/sponsors/gq.png"
import popsci from "../../assets/sponsors/popsci.png"
import unboxtherapy from "../../assets/sponsors/unboxtherapy.png"
import thenextweb from "../../assets/sponsors/thenextweb.png"
import financialtimes from "../../assets/sponsors/financialtimes.png"
import gizmodo from "../../assets/sponsors/gizmodo.png"
import stuff from "../../assets/sponsors/stuff.png"
import digitalspy from "../../assets/sponsors/digitalspy.png"
import internationalbusinesstimes  from "../../assets/sponsors/internationalbusinesstimes.png"
import digitaltrends from "../../assets/sponsors/digitaltrends.png"
import techjunkie from "../../assets/sponsors/techjunkie.png"
import broadsheet from "../../assets/sponsors/broadsheet.png"
import tomsguide from "../../assets/sponsors/tomsguide.png"
import trustedreviews from "../../assets/sponsors/trustedreviews.png"







const Sponsors = ({title}) => {
  return (
    <>
    <div className='h-[100%] w-[100%] md:h-[100%] md:w-[100%] bg-[#272727]'>
    <p className='text-[#7DFB5D] pt-[5rem] ml-[35rem]'>{title}</p>
        <div className='flex' >
        <img className='w-[200px]' src = {forbes} />
        <img className='w-[200px]' src = {wired} />
        <img className='w-[200px]' src = {techradar} />
        <img className='w-[200px]' src = {techcrunch} />
        <img className='w-[200px]' src = {pitchfork} />
        <img className='w-[200px]' src = {rollingstone} />
        
        </div>

        <div className='flex'>
        <img className= 'w-[200px]'  src = {engadget} />
        <img className= 'w-[200px]'  src={wallstreetjournal} />
        <img className='w-[200px]' src={gq} />
        <img className='w-[200px]' src={popsci} />
        <img className='w-[200px]' src={unboxtherapy} />
        <img className='w-[200px]' src={thenextweb} />
        </div>

        <div className='flex'>
        <img className='w-[200px]' src={financialtimes} />
        <img className='w-[200px]' src={gizmodo} />
        <img className='w-[200px]' src={stuff} />
        <img className='w-[200px]' src={digitalspy} />
        <img className='w-[200px]' src={internationalbusinesstimes} />
        <img className='w-[200px]' src={digitaltrends} />
        </div>


        <div className='flex ml-[12rem] pb-[5rem]'>
        <img className='w-[200px]' src={techjunkie} />
        <img className='w-[200px]' src={broadsheet} />
        <img className='w-[200px]' src={tomsguide} />
        <img className='w-[200px]' src={trustedreviews} />
        </div>
    </div>
    </>
  )
}

Sponsors.defaultProps = {
    title : "AS FEATURED IN"
}



export default Sponsors
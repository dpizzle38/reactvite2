import React from 'react'

const Header = () => {
  return (
    <>
    <div className="w-[100%] h-[100%] md:w-[100%] md:h-[100%] bg-Herobg text-white bg-cover px-4">
     <header className=" flex justify-between items-center py-[5px]"></header>
     <nav className="flex items-center space-x-5">
    <img src={logo}/>
      <ul className="items-center gap-8 md:flex">
        <li className="pb-3 cursor-pointer"><a href="#">Products</a></li>
        <li className="pb-3 cursor-pointer"><a href="#">Suscription</a></li>
        <li className="pb-3 cursor-pointer"><a href="#">Why Nura?</a></li>
      </ul>
     </nav>
    </div>
    
    </>
  )
}

export default Header



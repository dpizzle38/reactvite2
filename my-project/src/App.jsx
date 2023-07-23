import React from 'react';
import Header from "./component/hcomp/Header";
import Discount from './component/hcomp/Discount';
import Devices from './component/hcomp/Devices';
import Phones from './component/hcomp/Phones';
import Subscription from './component/hcomp/Subscription';
import Youtube from './component/hcomp/Youtube';
import Sponsors from './component/hcomp/Sponsors';
import Footer from "./component/hcomp/Footer"



const App = () => {
  return (
    <div>
    <Header />
    <Discount />
    <Phones />
    <Devices />
    <Subscription />
    <Youtube />
    <Sponsors />
    
    <Footer />
    </div>
  )
}

export default App
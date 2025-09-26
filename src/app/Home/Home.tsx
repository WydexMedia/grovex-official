
import React from 'react'
import HomeVideo from './HomeComponents/HomeVideo'
import Discription from './HomeComponents/Discription'

import OurStory from './HomeComponents/OurStory'
import Services from './HomeComponents/Services'
import BottomBar from './HomeComponents/BottomBar'
// import Clients from './HomeComponents/Clints'
import ClintSay from './HomeComponents/ClintSay'


function Home() {
  return (
    <div className="min-h-screen  bg-black text-white">
      <HomeVideo />
      <div className=" w-full relative z-10 bg-white">
        <Discription />
        <OurStory />
        <Services />
        <BottomBar />
        {/* <Clients /> */}
        <ClintSay />

      </div>
    </div>
  );

}

export default Home; 
import React from 'react'
import NavBar from './Navcomponent/NavBar'
import Banner from "./Bannercomponent/Banner"
import Category from './Categories/Categories'

function Home() {
  return (
    <div>
        <div className="navcontainer">
            <NavBar/>
        </div>
        <div className="Bannercontainer">
            <Banner/>
        </div>
        <div className="Categorycontainer">
            <Category/>
        </div>
        {/* <div className="Categorycontainer">
            <Category/>
        </div> */}
    </div>
  )
}

export default Home
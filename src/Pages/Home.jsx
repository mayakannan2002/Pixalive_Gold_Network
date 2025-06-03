import React from 'react'
import Headermain from './../Components/Header/Headerhero'
import Hero from '../Components/Home/Hero'
import Network from '../Components/Home/Network'
import TrendingProducts from '../Components/Home/Trending'
import SecuredBy from '../Components/Home/Secured'
import Divisions from '../Components/Home/Division'
import CustomerReview from '../Components/Home/Review'
import Contact from '../Components/Home/Contact'
import MainHome from '../Components/MainHome'
import GoldDotsSection from '../Components/Home/GoldDotsSection'
import GoldNetwork from '../Components/Home/GoldNetwork'

const Home = () => {
  return (
    <div>
      <MainHome  />
       {/* <Headermain /> */}
       <SecuredBy/>
       
       <Network/>
       <GoldDotsSection/>
       <GoldNetwork/>
     
      
      
    </div>
  )
}

export default Home

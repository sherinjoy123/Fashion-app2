import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/bestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'

function Home() {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
       <BestSeller/>
       <OurPolicy/>
       <NewsletterBox/>
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromBanner from './PromBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home
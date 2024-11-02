import React from 'react'
import Header from '../../Shared/Header/Header'
import Slider from './Slider'
import RecipeCategory from './RecipeCategory'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Slider></Slider>
        <RecipeCategory></RecipeCategory>
    </div>
  )
}

export default Home
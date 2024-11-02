import React from 'react'
import cat1 from '../../assets/baked-chicken-breast-9C4F43W-omrrd1tn91eu3rvdg1lqq2eq8c90ltq8nx9y5u5sww.jpg'
import cat2 from '../../assets/Savoring the flavors of Ethiopia! Wat, a spicy….jfif'
import cat3 from '../../assets/The Delight of Nepali Momos Ajleeblog.jfif'
import cat4 from '../../assets/nepal-food-thukpa-700-1.jpg'
import cat5 from '../../assets/nepaliDessert.jpg'


const RecipeCategory = () => {
  return (
    <div>
        <p>Choose a category</p>
        <h1>Recipe Categories</h1>
        <div className='flex justify-evenly'>
            <div>
                <img className='h-48 w-48' src={cat1} alt="" />
                <h3></h3>
            </div>
            <div>
                <img src={cat2} alt="" />
                <h3></h3>
            </div>
            <div>
                <img src={cat3} alt="" />
                <h3></h3>
            </div>
            <div>
                <img src={cat4} alt="" />
                <h3></h3>
            </div>
            <div>
                <img src={cat5} alt="" />
                <h3></h3>
            </div>
            
        </div>
    </div>
  )
}

export default RecipeCategory
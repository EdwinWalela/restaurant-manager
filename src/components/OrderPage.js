import React from 'react';
import PropTypes from 'prop-types';


import Header from './layout/Header';
import FoodSection from './FoodSection';

export default function OrderPage(props) {
    let sides = props.menuItems.filter(item=>{
        return item.type === "side"
    })
    let meals = props.menuItems.filter(item=>{
        return item.type === "meal"
    })
    let drinks = props.menuItems.filter(item=>{
        return item.type === "drink"
    })
    return (
        <div>
            <Header 
                title="Our Menu"
            />
             <FoodSection 
                title="Meals"
                items={meals}
            />
           <FoodSection 
                title="Sides"
                items={sides}
            />
            <FoodSection 
                title="Drinks"
                items={drinks}
            />
        </div>
    )
}

// PropTypes
OrderPage.propTypes = {
    menuItems:PropTypes.arrayOf(PropTypes.shape({
        id:Number,
        type:String,
        name:String,
        ingredients:String,
        price:Number
    })).isRequired
}



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
                handleUserOrderDisplay={props.handleUserOrderDisplay}
                userOrderDisplay={props.userOrderDisplay}
                title="Our Menu"
            />
            <div className="menu-wrapper">
                <FoodSection 
                    title="Meals"
                    items={meals}
                    handleUserOrderChange={props.handleUserOrderChange}
                    handleUserOrderCount={props.handleUserOrderCount}
                />
                <FoodSection 
                    title="Sides"
                    items={sides}
                    handleUserOrderChange={props.handleUserOrderChange}
                    handleUserOrderCount={props.handleUserOrderCount}
                />
                <FoodSection 
                    title="Drinks"
                    items={drinks}
                    handleUserOrderChange={props.handleUserOrderChange}
                    handleUserOrderCount={props.handleUserOrderCount}
                />
            </div>
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
    })).isRequired,
    handleUserOrderCount:PropTypes.func.isRequired,
    handleUserOrderChange:PropTypes.func.isRequired,
    userOrderDisplay:PropTypes.func.isRequired,
    handleUserOrderDisplay:PropTypes.func.isRequired
}



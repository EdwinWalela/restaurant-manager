import React from 'react';
import PropTypes from 'prop-types';


import Header from '../layout/Header';
import FoodSection from './FoodSection';

function MenuPage(props) {
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
                userOrder={props.userOrder}
                handleUserOrderDisplay={props.handleUserOrderDisplay}
                handleNavigationDisplay={props.handleNavigationDisplay}
                userOrderDisplay={props.userOrderDisplay}
                navigationDisplay={props.navigationDisplay}
                title="The Menu"
            />
            <div style={menuWrapperStyle}>
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

const menuWrapperStyle = {
    maxWidth:'800px',
    margin:'100px auto 10px auto'
}

// PropTypes
MenuPage.propTypes = {
    userOrder:PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number
    }).isRequired,
    menuItems:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        type:PropTypes.string,
        name:PropTypes.string,
        ingredients:PropTypes.string,
        price:PropTypes.mumber
    })).isRequired,
    handleUserOrderCount:PropTypes.func.isRequired,
    handleUserOrderChange:PropTypes.func.isRequired,
    userOrderDisplay:PropTypes.func.isRequired,
    navigationDisplay:PropTypes.bool.isRequired,
    handleUserOrderDisplay:PropTypes.func.isRequired,
    handleNavigationDisplay:PropTypes.func.isRequired
}

export default MenuPage;
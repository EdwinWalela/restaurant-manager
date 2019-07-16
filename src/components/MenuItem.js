import React from 'react'
import PropTypes from 'prop-types'

import ItemCounter from './ItemCounter';

function MenuItem(props) {
    let foodItem = props.foodItem;
    return (
        <div className="menu-item">
            <h3>{foodItem.name}</h3>
            <h4>Ksh.{foodItem.price}</h4>
            <p>{foodItem.ingredients}</p>
            <ItemCounter
                handleUserOrderChange = {props.handleUserOrderChange}
                handleUserOrderCount = {props.handleUserOrderCount}
                itemId={foodItem.id}
            />
        </div>
    )   
}

MenuItem.propTypes = {
    handleUserOrderCount:PropTypes.func.isRequired,
    handleUserOrderChange:PropTypes.func.isRequired,
    foodItem:PropTypes.objectOf(PropTypes.shape({
        id:Number,
        type:String,
        name:String,
        ingredients:String,
        price:Number
    }))
}

export default MenuItem


import React from 'react'
import PropTypes from 'prop-types'

function MenuItem(props) {
    let foodItem = props.foodItem;
    return (
        <div className="menu-item">
            <h3>{foodItem.name}</h3>
            <h4>Ksh.{foodItem.price}</h4>
            <p>{foodItem.ingredients}</p>
        </div>
    )   
}

MenuItem.propTypes = {
    foodItem:PropTypes.objectOf(PropTypes.shape({
        id:Number,
        type:String,
        name:String,
        ingredients:String,
        price:Number
    }))
}

export default MenuItem


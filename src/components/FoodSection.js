import React from 'react'
import PropTypes from 'prop-types'

import MenuItem from './MenuItem';

export default function FoodSection(props) {
    return (
        <div className="food-section">
            <h3>{props.title}</h3>
            {props.items.map(foodItem=>(
                <MenuItem
                    key={foodItem.id}
                    foodItem={foodItem}
                />
            ))}
        </div>
    )
}

FoodSection.propTypes = {
    title:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:Number,
        type:String,
        name:String,
        ingredients:String,
        price:Number
    })).isRequired
}
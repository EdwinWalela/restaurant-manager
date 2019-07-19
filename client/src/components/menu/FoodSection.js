import React from 'react'
import PropTypes from 'prop-types'

import MenuItem from './MenuItem';

function FoodSection(props) {
    return (
        <div style={foodSectionStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
            {props.items.map(foodItem=>(
                <MenuItem
                    key={foodItem.id}
                    foodItem={foodItem}
                    handleUserOrderChange={props.handleUserOrderChange}
                    handleUserOrderCount = {props.handleUserOrderCount}
                />
            ))}
        </div>
    )
}

const foodSectionStyle = {
    margin:'10px auto',
    padding:'20px'
}

const titleStyle = {
    color:'#555',
    fontSize:'1.5em'
}

FoodSection.propTypes = {
    title:PropTypes.string,
    handleUserOrderChange:PropTypes.func.isRequired,
    handleUserOrderCount:PropTypes.func.isRequired,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:Number,
        type:String,
        name:String,
        ingredients:String,
        price:Number
    })).isRequired
}

export default FoodSection;
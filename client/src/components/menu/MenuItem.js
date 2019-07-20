import React from 'react'
import PropTypes from 'prop-types'

import ItemCounter from './ItemCounter';

function MenuItem(props) {
    let foodItem = props.foodItem;
    return (
        <div style={menuItemStyle}>
            <h3 style={itemNameStyle}>{foodItem.name}</h3>
            <h4 style={itemPriceStyle}>Ksh.{foodItem.price}</h4>
            <p style={ingredientsStyle}>{foodItem.ingredients}</p>
            <ItemCounter
                handleUserOrderChange = {props.handleUserOrderChange}
                handleUserOrderCount = {props.handleUserOrderCount}
                itemId={foodItem.id}
            />
        </div>
    )   
}

const menuItemStyle = {
    borderRadius: '5px',
    margin:'10px auto',
    width:'100%',
    maxWidth:'600px',
    borderBottom:'solid 1px #fff',
    padding:'20px',
    color:'#fff',
    background:'#058ED9'
}

const itemNameStyle = {
    display: 'inline-block',
    fontWeight:'500',
    margin:'5px',
    textTransform:'capitalize'
}

const itemPriceStyle = {
    float:'right',
    margin:'5px'
}

const ingredientsStyle = {
    fontSize: '0.85em',
    padding:'0 5px'
}

MenuItem.propTypes = {
    handleUserOrderCount:PropTypes.func.isRequired,
    handleUserOrderChange:PropTypes.func.isRequired,
    foodItem:PropTypes.objectOf(PropTypes.shape({
        id:PropTypes.number,
        type:PropTypes.string,
        name:PropTypes.string,
        ingredients:PropTypes.string,
        price:PropTypes.number
    }))
}

export default MenuItem


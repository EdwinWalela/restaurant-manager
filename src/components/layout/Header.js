import React from 'react'
import PropTypes from 'prop-types'

import UserOrders from '../UserOrders';

function Header(props) {
    return (
        <div className="header">
        <i class="fas fa-bars" onClick={props.handleUserOrderDisplay}></i>
            <h1>{props.title}</h1>

            {props.userOrderDisplay ? <UserOrders items={props.userOrder} /> : ''}
        </div>
    )
}

Header.propTypes = {
    userOrder:PropTypes.shape({
        id:Number,
        name:String,
        price:Number,
        quantity:Number
    }).isRequired,
    title:PropTypes.string,
    userOrderDisplay:PropTypes.bool,
    handleUserOrderDisplay:PropTypes.func.isRequired
}

export default Header


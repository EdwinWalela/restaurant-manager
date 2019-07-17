import React from 'react'
import PropTypes from 'prop-types'

import UserOrders from '../UserOrders';

function Header(props) {
    return (
        <div className="header">
        <i class="fas fa-bars" onClick={props.handleUserOrderDisplay}></i>
            <h1>{props.title}</h1>

            {props.userOrderDisplay ? <UserOrders /> : ''}
        </div>
    )
}

Header.propTypes = {
    title:PropTypes.string,
    userOrderDisplay:PropTypes.bool,
    handleUserOrderDisplay:PropTypes.func.isRequired
}

export default Header


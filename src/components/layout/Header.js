import React from 'react'
import PropTypes from 'prop-types'

import UserOrders from '../UserOrders';

function Header(props) {
    return (
        <div style={headerStyle}>
            <i className="fa fa-bars" style={orderButtonStyle} onClick={props.handleUserOrderDisplay}></i>
            <h1 style={titleStyle}>{props.title}</h1>
            {props.userOrderDisplay ? <UserOrders items={props.userOrder} /> : ''}
        </div>
    )
}

const headerStyle = {
    color:'#fff',
    background:'#FF1053',
    top:'0',
    position: 'fixed',
    width: '100%'
}

const titleStyle = {
    padding:'20px',
    textAlign: 'center'
}

const orderButtonStyle = {
    display:'block',
    margin:'10px',
    fontSize: '2em',
    color:'#333',
    padding:'5px',
    float: 'right',
    transition:'all linear .1s'
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


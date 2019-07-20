import React from 'react'
import PropTypes from 'prop-types'

import UserOrders from '../menu/UserOrders';
import Navigation from '../layout/Navigation';

function Header(props) {
    return (
        <div style={headerStyle}>
            <i style={orderButtonStyle} onClick={props.handleNavigationDisplay} className="fa fa-bars" ></i>
            <i style={orderButtonStyle} onClick={props.handleUserOrderDisplay} className="fas fa-shopping-cart"></i>
            <h1 style={titleStyle}>{props.title}</h1>
            {props.userOrderDisplay ? <UserOrders items={props.userOrder} /> : ''}
            {props.navigationDisplay ? <Navigation /> : ''}
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
    userOrder:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number
    })).isRequired,
    title:PropTypes.string,
    userOrderDisplay:PropTypes.bool.isRequired,
    navigationDisplay:PropTypes.bool.isRequired,
    handleUserOrderDisplay:PropTypes.func.isRequired,
    handleNavigationDisplay:PropTypes.func.isRequired
}

export default Header


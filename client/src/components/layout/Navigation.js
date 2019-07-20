import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function UserOrders(){
    return (
        <div style={userOrderStyle}>
            <h3 style={titleStyle}> Reactive Restaurant</h3>
            <NavLink to="/orders"><li style={listStyle}>Orders</li></NavLink>
            <NavLink to="/our-menu"><li style={listStyle}>Menu</li></NavLink>
            <NavLink exact to="/"><li style={listStyle}>Home</li></NavLink>
            <div style={socialBarStyle}>
                <i style={socialIconStyle} class="fab fa-facebook-square"></i>
                <i style={socialIconStyle} class="fab fa-twitter-square"></i>
                <i style={socialIconStyle} class="fas fa-phone-square"></i>
            </div>
        </div>
    )
}

const userOrderStyle = {
    right:'0vw',
    position:'absolute',
    background: '#333',
    padding:'10px 30px',
    float: 'right',
    color:'#fff',
    width: '100%',
    height:'400px',
    maxWidth:'300px'
}

const titleStyle = {
    color:'#FF1053',
    margin:'10px auto'
}

const listStyle = {
    padding:'10px',
    margin:'10px 10px'
}

const socialBarStyle = {
    textAlign:'center',
    margin:'30px auto'
}

const socialIconStyle = {
    fontSize:'2em',
    margin:'15px',
}

export default UserOrders;


import React from 'react'
import { NavLink } from 'react-router-dom'

import PropTypes from 'prop-types'

import Header from '../layout/Header'

function HomeNavigation(props) {
    return (
       <React.Fragment>
            <Header 
                userOrder = {props.userOrder}
                handleOrderCreation = {props.handleOrderCreation}
                handleNavigationDisplay = {props.handleNavigationDisplay}
                handleUserOrderDisplay = {props.handleUserOrderDisplay}
                navigationDisplay = {props.navigationDisplay}
                userOrderDisplay = {props.userOrderDisplay}
                title="Home"
            />
            <div style={containerStyle}>
                <NavLink to="/our-menu">
                        <div style={linkStyle}>
                            <i style={iconStyle} className="fas fa-utensils"></i><br/>
                        Our Menu
                        </div>
                </NavLink>
                <NavLink to="/orders">
                    <div style={linkStyle}>
                        <i style={iconStyle} className="far fa-clock"></i><br/>
                        Track Order
                    </div>
                </NavLink>
                <NavLink to="/admin">
                    <div style={linkStyle}>
                        <i style={iconStyle} className="far fa-list-alt"></i><br/>
                        Orders Dashboard
                    </div>
                </NavLink>
            </div>
        </React.Fragment>
    )
}

const containerStyle = {
    margin:'90px auto 10px auto',
    width:'100%',
    padding:'20px',
    textAlign:'center',
    maxWidth:'750px'
}

const linkStyle = {
    background:'#058ED9',
    color:'#fff',
    display:'inline-block',
    margin:'15px auto',
    padding:'10px 0px',
    width:'100%',
    maxWidth:'400px',
    cursor:'pointer',
    borderRadius:'8px'
}

const iconStyle = {
    display:'inline-block',
    fontSize:'2em',
    margin:'10px'
}

HomeNavigation.propTypes = {
    userOrderDisplay:PropTypes.bool.isRequired,
    navigationDisplay:PropTypes.bool.isRequired,
    handleUserOrderDisplay:PropTypes.func.isRequired,
    handleNavigationDisplay:PropTypes.func.isRequired,
    handleOrderCreation:PropTypes.func.isRequired,
    userOrder:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number
    })).isRequired,
}

export default HomeNavigation


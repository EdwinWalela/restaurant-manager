import React from 'react'
import PropTypes from 'prop-types'

import Header from '../layout/Header';

function OrdersPage(props) {
    return (
        <React.Fragment>
            <Header 
                userOrder={props.userOrder}
                handleUserOrderDisplay={props.handleUserOrderDisplay}
                handleNavigationDisplay={props.handleNavigationDisplay}
                userOrderDisplay={props.userOrderDisplay}
                navigationDisplay={props.navigationDisplay}
                title="The Menu"
            />
            <div style={wrapperStyle}>
                <h1>This is the orders page. Customers will be able to see their orders here.</h1>
            </div>
        </React.Fragment>
    )
}

const wrapperStyle = {
    margin:'80px auto 50px auto',
    padding:'20px'
}

OrdersPage.propTypes = {
    orderNumber:PropTypes.number.isRequired,
    clientName:PropTypes.string.isRequired,
    orderStatus:PropTypes.number.isRequired,
    userOrder:PropTypes.shape({
        id:Number,
        name:String,
        price:Number,
        quantity:Number
    }).isRequired,
    menuItems:PropTypes.arrayOf(PropTypes.shape({
        id:Number,
        type:String,
        name:String,
        ingredients:String,
        price:Number
    })).isRequired,
    userOrderDisplay:PropTypes.func.isRequired,
    navigationDisplay:PropTypes.bool.isRequired,
    handleUserOrderDisplay:PropTypes.func.isRequired,
    handleNavigationDisplay:PropTypes.func.isRequired
}


export default OrdersPage


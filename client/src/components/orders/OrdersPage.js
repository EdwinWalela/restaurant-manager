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
    userOrderDisplay:PropTypes.bool.isRequired,
    navigationDisplay:PropTypes.bool.isRequired,
    handleUserOrderDisplay:PropTypes.func.isRequired,
    handleNavigationDisplay:PropTypes.func.isRequired,
    orders:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        number:PropTypes.number,
        name:PropTypes.string,
        status:PropTypes.number
    })).isRequired,
}


export default OrdersPage
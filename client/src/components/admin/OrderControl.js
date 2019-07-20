import React from 'react'
import PropTypes from 'prop-types'

import Header from '../layout/Header';
import UserOrder from './UserOrder';

function OrderControl(props) {
    return (
        <React.Fragment>
            <Header  
                userOrder={props.userOrder}
                handleUserOrderDisplay={props.handleUserOrderDisplay}
                handleNavigationDisplay={props.handleNavigationDisplay}
                userOrderDisplay={props.userOrderDisplay}
                navigationDisplay={props.navigationDisplay}
                title="Order Control"
            />
            <div style={ordersWrapperStyle}>
                <UserOrder order={props.orders[0]}/>
            </div>
        </React.Fragment>
    )
}

const ordersWrapperStyle = {
    margin:'100px auto',
    maxWidth:'800px'
}

OrderControl.propTypes = {
    userOrderDisplay:PropTypes.bool.isRequired,
    navigationDisplay:PropTypes.bool.isRequired,
    handleUserOrderDisplay:PropTypes.func.isRequired,
    handleNavigationDisplay:PropTypes.func.isRequired,
    orders:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        number:PropTypes.number,
        user:PropTypes.string,
        status:PropTypes.number
    })).isRequired,
}

export default OrderControl


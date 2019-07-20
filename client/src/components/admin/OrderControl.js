import React from 'react'
import PropTypes from 'prop-types'

import Header from '../layout/Header';

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
            <h1>This is the order control area</h1>
        </React.Fragment>
    )
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


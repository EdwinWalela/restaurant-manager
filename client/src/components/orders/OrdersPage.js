import React from 'react'
import PropTypes from 'prop-types'

import Header from '../layout/Header';
import OrdersTable from './OrdersTable';

function OrdersPage(props) {
    return (
        <React.Fragment>
            <Header 
                userOrder={props.userOrder}
                handleUserOrderDisplay={props.handleUserOrderDisplay}
                handleOrderCreation={props.handleOrderCreation}                         
                handleNavigationDisplay={props.handleNavigationDisplay}
                userOrderDisplay={props.userOrderDisplay}
                navigationDisplay={props.navigationDisplay}
                title="Orders"
            />
            <div style={wrapperStyle}>
                <OrdersTable orders={props.orders}/>
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
    handleOrderCreation:PropTypes.func.isRequired
    ,
    orders:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        number:PropTypes.number,
        user:PropTypes.string,
        status:PropTypes.number
    })).isRequired,
}


export default OrdersPage
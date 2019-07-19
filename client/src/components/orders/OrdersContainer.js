import React from 'react'
import PropTypes from 'prop-types'

function OrdersContainer(props) {
    return (
        <div>
            <h1>This is the orders page. Customers will be able to see their orders here.</h1>
        </div>
    )
}

OrdersContainer.propTypes = {
    orderNumber:PropTypes.number.isRequired,
    clientName:PropTypes.string.isRequired,
    orderStatus:PropTypes.number.isRequired
}



export default OrdersContainer


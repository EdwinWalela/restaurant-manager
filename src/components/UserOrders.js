import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserOrders extends Component{
    render(){
        return (
            <div className="user-orders">
               my orders
            </div>
        )
    }
}

UserOrders.propTypes = {
    orders:PropTypes.shape({
        id:PropTypes.number,
        quantity:PropTypes.number
    })
}

export default UserOrders


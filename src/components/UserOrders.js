import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserOrders extends Component{

    state = {

    }

    render(){
        return (
            <div className="user-orders">
                <h3>My Order</h3>
               {this.props.items.map(item=>{
                   return (
                       <li>name x quantity Ksh.300</li>
                   )
               })}
            </div>
        )
    }
}

UserOrders.propTypes = {
    items:PropTypes.shape({
        id:PropTypes.number,
        quantity:PropTypes.number
    })
}

export default UserOrders


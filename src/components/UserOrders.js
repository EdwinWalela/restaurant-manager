import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserOrders extends Component{

    state = {

    }

    render(){
        let items = this.props.items;
        return (
            <React.Fragment>
                <div className="user-orders">
                    {items.length > 0 ? <h3>My Order</h3> : <h3>No item selected</h3>}
                    {items.map(item=>{
                        return (
                            <li>{item.id} x {item.quantity} </li>
                        )
                    })}
                    <div>Total : Ksh.1200</div>
                    <button>Order Now</button>
                </div>
                
            </React.Fragment>
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


import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserOrders extends Component{
    state = {

    }

    render(){
        // Filter out items with quantity of 0
        let items = this.props.items.filter(item=>{
            return item.quantity !== 0;
        });
        // Calculate order total
        let total = items.reduce((a,b)=>{
                console.log(a);
                console.log(b);
                return a + (b.price * b.quantity)
            },0).toLocaleString();

        return (
            <div className="user-orders">
                {items.length > 0 ? <h3>My Order</h3> : <h3>No item selected</h3>}
                {items.map(item=>{
                    return (
                        <li>{item.name} x {item.quantity} @ Ksh.{item.price.toLocaleString()}</li>
                    )
                })}
                
                <div>Total : Ksh.{total}</div>
                {items.length !== 0 ? <button>Order Now</button> : '' }
                
            </div>
        )
    }
}


UserOrders.propTypes = {
    items:PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number
    })
}

export default UserOrders;


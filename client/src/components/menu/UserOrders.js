import React from 'react'
import PropTypes from 'prop-types'

function UserOrders(props){
        let items = props.items;
        
        // Calculate order total
        let total = items.reduce((total,item)=>{
                return total + (item.price * item.quantity)
            },0).toLocaleString();

        return (
            <div style={userOrderStyle}>
                 <h3 style={titleStyle}> {items.length > 0 ?'My Order':'No item selected'} </h3>
                {items.map(item=>{
                    return (
                        <li style={listStyle} >{item.name} x {item.quantity} @ Ksh.{item.price.toLocaleString()}</li>
                    )
                })}
                
                <h3 style={totalStyle}>Total : Ksh.{total}</h3>
                {items.length !== 0 ? <button style={buttonStyle} onClick={props.handleOrderCreation} >Order Now</button> : '' }
            </div>
        )
}

const userOrderStyle = {
    right:'0vw',
    position:'absolute',
    background: '#333',
    padding:'10px 20px',
    float: 'right',
    color:'#fff',
    width: '100%',
    maxWidth:'400px'
}

const titleStyle = {
    color:'#FF1053'
}

const totalStyle = {
    width:'95%',
    margin:'10px auto',
    border:'solid 1px',
    padding:'10px',
    textAlign:'center',
    background:'#fff',
    color:'#333',
    fontWeight:'600'
}

const listStyle = {
    padding:'20px',
    margin:'0px 10px',
    borderBottom:'solid 1px'
}

const buttonStyle = {
    width:'95%',
    margin:'10px auto',
    padding:'10px',
    background:'#FF1053',
    color:'#fff',
    fontWeight:'600',
}


UserOrders.propTypes = {
    items:PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number
    }).isRequired,
    handleOrderCreation:PropTypes.func.isRequired
}

export default UserOrders;


import React from 'react'
import PropTypes from 'prop-types'

import ProgressBar from './ProgressBar';

function UserOrder(props) {
    let order = props.order;
    return (
        <div style={orderContainerStyle}>
            <h1 style={orderNumberStyle}># {order.number}</h1>
            <p style={orderItemsStyle}> 
                {order.items.map(item=>(
                    <React.Fragment>
                       {item.id} X {item.quantity}<br/>
                    </React.Fragment>
                ))}
            </p>
            <button style={collectedButton} onClick={props.handleOrderCompletion.bind(this,order.id)}>Complete</button>
            <ProgressBar
                orderId={order.id}
                status={order.status}
                handleOrderStatusUpdate ={props.handleOrderStatusUpdate}
            />
        </div>
    )
}

const orderContainerStyle = {
    borderRadius: '5px',
    margin:'40px auto',
    width:'100%',
    maxWidth:'600px',
    borderBottom:'solid 1px #fff',
    padding:'20px',
    background:'#555'
}

const orderNumberStyle = {
    verticalAlign:'top',
    display:'inline-block',
    color:'#fff',
    width:'100px',
    padding:'10px'
}

const orderItemsStyle = {
    padding:'10px',
    width:'400px',
    display:'inline-block',
    margin:'0px 20px',
    background:'#eee',
    borderRadius:'5px',
    textTransform:'capitalize'
}

const collectedButton = {
    padding:'5px 10px',
    borderRadius:'10px',
    margin:'0px auto',
    display:'inline-block',
    border:'none',
    background:'#FF1053',
    color:'#fff'
}

UserOrder.propTypes = {
    order:PropTypes.shape({
        id:PropTypes.number,
        number:PropTypes.number,
        user:PropTypes.string,
        status:PropTypes.number,
        items:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.string,
            quantity:PropTypes.number
        }))
    }).isRequired,
    handleOrderCompletion:PropTypes.func.isRequired,
    handleOrderStatusUpdate:PropTypes.func.isRequired
}

export default UserOrder


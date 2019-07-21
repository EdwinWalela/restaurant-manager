import React from 'react'
import PropTypes from 'prop-types'

import ProgressBar from './ProgressBar';

function UserOrder(props) {
    let order = props.order
    return (
        <div style={orderContainerStyle}>
            <h1 style={orderNumberStyle}># {order.number}</h1>
            <p style={orderItemsStyle}> Fries X 2 <br/> soda X 2  <br/>Combo Special Deli X 2 </p>
            <ProgressBar status='4' />
        </div>
    )
}

const orderContainerStyle = {
    borderRadius: '5px',
    margin:'10px auto',
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
    borderRadius:'5px'
}

UserOrder.propTypes = {

}

export default UserOrder


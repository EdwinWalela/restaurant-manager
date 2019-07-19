import React from 'react'
import PropTypes from 'prop-types'

function ItemCounter(props) {
    let itemCount = props.handleUserOrderCount(props.itemId)
    return (
        <div style={itemCounterStyle}>
            {itemCount > 0 ? <span style={itemCountStyle}>{itemCount}</span> :''}
           <button onClick={props.handleUserOrderChange.bind(this,props.itemId,1)} style={increaseBtnStyle}>+</button>
           <button onClick={props.handleUserOrderChange.bind(this,props.itemId,0)} style={reduceBtnStyle}>-</button>
        </div>
    )
}

const itemCounterStyle = {
    fontSize: '0.85em',
    padding:'0 5px',
    textAlign:'right'
}

const itemCountStyle = {
    color:'#333',
    background:'#fff',
    borderRadius:'5px',
    padding:'5px 10px',
    fontSize:'1.1em',
    fontWeight:'600',
    margin:'10px'
}

const buttonStyle = {
    color:'#fff',
    padding:'5px',
    fontSize: '1.2em',
    width:'50px',
    border:'solid 1px transparent',
}

const reduceBtnStyle = {
    background:'#333',
    ...buttonStyle
}

const increaseBtnStyle = {
    background:'#FF1053',
    ...buttonStyle
}

ItemCounter.propTypes = {
    itemId:PropTypes.number,
    handleUserOrderChange:PropTypes.func.isRequired,
    handleUserOrderCount:PropTypes.func.isRequired
}

export default ItemCounter


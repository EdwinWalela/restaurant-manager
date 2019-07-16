import React from 'react'
import PropTypes from 'prop-types'

function ItemCounter(props) {

    let itemCount = props.handleUserOrderCount(props.itemId)

    return (
        <div className="item-counter">
            {itemCount > 0 ? <span>{itemCount}</span> :''}
           <button onClick={props.handleUserOrderChange.bind(this,props.itemId,1)} style={increaseBtnStyle}>+</button>
           <button onClick={props.handleUserOrderChange.bind(this,props.itemId,0)} style={reduceBtnStyle}>-</button>
        </div>
    )
}

const reduceBtnStyle = {
    background:'#333'
}

const increaseBtnStyle = {
    background:'#FF1053'
}

ItemCounter.propTypes = {
    itemId:PropTypes.number,
    handleUserOrderChange:PropTypes.func.isRequired,
    handleUserOrderCount:PropTypes.func.isRequired
}

export default ItemCounter


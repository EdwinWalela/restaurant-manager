import React from 'react'
import PropTypes from 'prop-types'

function OrdersTable(props) {
    // Filter out pending orders
    let orders = props.orders.filter(order=>{
        return order.status !== 0;
    })
    // Set order ETA
    orders = orders.map(order=>{
        if(order.status === 0){
            order.status = "Pending"
            order.eta = 0;
            return order
        }else if(order.status === 1){
            order.status = "Being Prepared"
            order.eta = 10;
            return order
        }else if(order.status === 2){
            order.status = "In Oven"
            order.eta = 8;
            return order;
        }else if(order.status === 3){
            order.status = "Quality Check"
            order.eta = 2;
            return order;
        }else if(order.status === 4){
            order.eta = 0;
            order.status = "Ready"
            return order;
        }

    })
    
    return (
        <React.Fragment>
            <table style={tableStyle}>
                <tbody>
                    {orders.map(order=>(
                        <tr key={order.id}>
                            <td style={tableDataStyle}># {order.number}</td>
                            <td style={tableDataStyle}>{order.user}</td>
                            <td style={tableDataStyle}>{order.status}</td>
                            <td style={tableDataStyle}>{order.eta != 0 ? `${order.eta} minutes` :'' }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

const tableStyle = {
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom:'2px solid #FF1053',
    boxShadow: '0px 0px 20px rgba(0,0,0,0.10)'
}

const tableDataStyle = {
    color: '#999',
    textTransform:'capitalize',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
}

OrdersTable.propTypes = {
    orders:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        user:PropTypes.string,
        status:PropTypes.number
    })).isRequired
}

export default OrdersTable


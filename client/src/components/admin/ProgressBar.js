import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ProgressBar extends Component {

    pendingStyle = () =>{
         return {
            background:'#540D6E',
            ...defaultStatusStyle
        }
    }

    pereparationStyle = () =>{
        return {
            background:'#347FC4',
            ...defaultStatusStyle
        }
    }

    ovenStyle = () =>{
        return {
            background:'#FE5F55',
            ...defaultStatusStyle
        }
    }

    checkStyle = () =>{
        return {
            background:'#FFBA08',
            ...defaultStatusStyle
        }
    }

    readyStyle = () =>{
        return {
            background:'#5FBB97',
            ...defaultStatusStyle
        }
    }

    changeOrderStatus = (status,orderId) =>{
        this.props.handleOrderStatusUpdate(status,orderId)
    }

    render(){
        let status = this.props.status;
        let id = this.props.orderId
        return (
            <div style={progressBarstyle}>
                <span style={status >= 0 ? this.pendingStyle() : defaultStatusStyle}>Pending</span>
                <span onClick={this.changeOrderStatus.bind(this,1,id)} style={status >= 1 ? this.pereparationStyle() : defaultStatusStyle}>Preparation</span>
                <span onClick={this.changeOrderStatus.bind(this,2,id)} style={status >= 2 ? this.ovenStyle() : defaultStatusStyle}>In Oven</span>
                <span onClick={this.changeOrderStatus.bind(this,3,id)} style={status >= 3 ? this.checkStyle() : defaultStatusStyle}>Quality Check</span>
                <span onClick={this.changeOrderStatus.bind(this,4,id)} style={status >= 4 ? this.readyStyle() : defaultStatusStyle}>Ready</span>
            </div>
        )
    }
}

const defaultStatusStyle = {
    display:'inline-block',
    borderRight:'solid 1px',
    padding:'4px',
    width:'20%',
    color:'#fff',
    fontSize:'0.8em',
    cursor:'pointer'
}

const progressBarstyle = {
    textAlign:'center',
    margin:'20px auto 0px auto',
    width:'100%',
}

ProgressBar.propTypes = {
    orderId:PropTypes.number,
    status:PropTypes.number.isRequired,
    handleOrderStatusUpdate:PropTypes.func.isRequired
}

export default ProgressBar


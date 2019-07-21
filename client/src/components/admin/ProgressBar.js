import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ProgressBar extends Component {

    levelStyle = (level) =>{
        let style = {
            display:'inline-block',
            padding:'4px',
            borderRadius:'5px',
            width:'20%',
            background:'#eee',
            color:'#fff',
            fontSize:'0.8em'
        }

        if(level === 0){
            style.background = '#FE5F55';
        }else if(level === 1){
            style.background = '#507DBC';
        }else if(level === 2){
            style.background = 'orange';
        }else if(level === 3){
            style.background = '#FFBA08';
        }else{
            style.background = '#5FBB97';
        }
        return style;
    }

    pendingStyle = () =>{
         return {
            background:'#FE5F55',
            ...defaultStatusStyle
        }
    }

    pereparationStyle = () =>{
        return {
            background:'#507DBC',
            ...defaultStatusStyle
        }
    }

    ovenStyle = () =>{
        return {
            background:'orange',
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

    render(){
        let status = this.props.status;
        return (
            <div style={progressBarstyle}>
                <span style={status === 0 ? this.pendingStyle() : defaultStatusStyle}>Pending</span>
                <span style={status === 1 ? this.pereparationStyle() : defaultStatusStyle}>Preparation</span>
                <span style={status === 2 ? this.ovenStyle() : defaultStatusStyle}>In Oven</span>
                <span style={status === 3 ? this.checkStyle() : defaultStatusStyle}>Check</span>
                <span style={status === 4 ? this.readyStyle() : defaultStatusStyle}>Ready</span>
            </div>
        )
    }
}

const defaultStatusStyle = {
    display:'inline-block',
    padding:'4px',
    borderRadius:'5px',
    width:'20%',
    color:'#fff',
    fontSize:'0.8em',
    cursor:'pointer'
}


const progressBarstyle = {
    textAlign:'center',
    margin:'20px auto 20px 120px',
    width:'400px',
    background:'',
    borderRadius:'5px',
}

ProgressBar.propTypes = {
    status:PropTypes.number.isRequired
}

export default ProgressBar


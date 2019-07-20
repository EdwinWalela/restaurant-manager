import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ProgressBar extends Component {
    render(){
        return (
            <div style={progressBarstyle}>
                <span style={levelStyle}>0</span>
                <span style={levelStyle}>1</span>
                <span style={levelStyle}>2</span>
                <span style={levelStyle}>3</span>
                <span style={levelStyle}>4</span>
            </div>
        )
    }
}

const progressBarstyle = {
    textAlign:'center',
    margin:'20px auto 20px 120px',
    width:'400px',
    background:'#eee',
    borderRadius:'5px',
}

const levelStyle = {
    display:'inline-block',
    padding:'5px',
    borderRadius:'5px',
    width:'20%',
    background:'#eee',
}



ProgressBar.propTypes = {

}

export default ProgressBar


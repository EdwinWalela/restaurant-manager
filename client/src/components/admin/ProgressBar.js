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

    render(){
        return (
            <div style={progressBarstyle}>
                <span style={this.levelStyle(0)}>Pending</span>
                <span style={this.levelStyle(1)}>Preparation</span>
                <span style={this.levelStyle(2)}>In Oven</span>
                <span style={this.levelStyle(3)}>Check</span>
                <span style={this.levelStyle(4)}>Ready</span>
            </div>
        )
    }
}

const progressBarstyle = {
    textAlign:'center',
    margin:'20px auto 20px 120px',
    width:'400px',
    background:'',
    borderRadius:'5px',
}

ProgressBar.propTypes = {

}

export default ProgressBar


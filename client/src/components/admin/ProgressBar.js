import React from 'react'
import PropTypes from 'prop-types'

function ProgressBar(props) {
    return (
        <div style={progressBarstyle}>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </div>
    )
}

const progressBarstyle = {

}

ProgressBar.propTypes = {

}

export default ProgressBar


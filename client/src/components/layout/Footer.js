import React from 'react'

function Footer() {
    return (
        <div style={footerStyle}>
           <p>Made with <i className="fas fa-heart"> </i> by  <a target="_blank" rel="noopener noreferrer" href="https://github.com/EdwinWalela/restaurant-manager">Edwin Walela.</a></p>
        </div>
    )
}

const footerStyle = {
    position:'fixed',
    width:'100%',
    bottom:'0',
    marginTop: '200px',
    textAlign:'center',
    background:'#555',
    padding:'20px',
    color:'#fff'
}

export default Footer;
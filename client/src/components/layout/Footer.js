import React from 'react'

function Footer() {
    return (
        <div style={footerStyle}>
           <p>Made with love by <a href="#">Edwin Walela</a></p>
        </div>
    )
}

const footerStyle = {
    marginTop: '100px',
    textAlign:'center',
    background:'#555',
    padding:'20px',
    color:'#fff'
}

export default Footer;
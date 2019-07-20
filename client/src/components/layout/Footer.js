import React from 'react'

function Footer() {
    return (
        <div style={footerStyle}>
           <p>Made with love by Edwin Walela</p>
        </div>
    )
}

const footerStyle = {
    marginTop: '200px',
    textAlign:'center',
    background:'#555',
    padding:'20px',
    color:'#fff'
}

export default Footer;
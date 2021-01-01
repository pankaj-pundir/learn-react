import React from 'react';
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <div style={headerStyle}>
            <h1>Todo list </h1>
            <Link to='/'> Home  </Link> |
            <Link to='/about'> About  </Link>
        </div>
    )
}

const headerStyle = {
    background : '#333',
    color:'#fff',
    padding:'10px',
    textAlign:'center'

}
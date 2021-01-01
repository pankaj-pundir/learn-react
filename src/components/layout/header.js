import React from 'react';
import {Link} from 'react-router-dom';
import context from '../../context';

export default function Header() {

    const  data = React.useContext(context)
    // console.log('data is =',data)
    return (
        
        // <context.Consumer >
        //     {data =>(

                 <div style={headerStyle}>
                 <h1>Todo list </h1>
                 <Link to='/'> Home  </Link> |
                 <Link to='/about'> About  </Link> |
                 value is = {data.value}
             </div>
            // )}
        // </context.Consumer>
       
    )
}

const headerStyle = {
    background : '#333',
    color:'#fff',
    padding:'10px',
    textAlign:'center'

}
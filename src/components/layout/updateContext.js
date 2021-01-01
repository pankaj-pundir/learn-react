import React, { Component }from 'react'
import context from '../../context';


function UpdateContext() {
        const con = React.useContext(context);

        return (
            <div>
                <input type="text" name="input_box" value={con.value} onChange={con.updateVal} />
            </div>
        )
       
}

export default UpdateContext;

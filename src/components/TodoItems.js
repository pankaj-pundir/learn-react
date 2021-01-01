import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () =>{
       return { 
        background:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',   
        textDecoration: this.props.todos.completed ?
        'line-through':'none',
        
       }
            
    }
    
    render() {

        const {id,title} = this.props.todos;
        return (
            <div style={this.getStyle()}>
                <input
                 type='checkbox' onChange={this.props.markComplete.bind(
                    this,id)}/>
                {title}
            <button onClick={this.props.delTodo.bind(this,id)}
            style = {btnStyle}> X</button>
            </div>
        )
    }
}

const btnStyle = {
    background : '#ff0000',
    color : '#ccc',
    padding:'5px', 
    float:'right',
    borderRadius:'50%',
    cursor:'pointer' 
}

TodoItem.propTypes = {
    todos:PropTypes.object.isRequired
}
export default TodoItem

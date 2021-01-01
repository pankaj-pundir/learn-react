import {Component} from 'react';
import TodoItem from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
  
    // markComplete = () =>{
    //     console.log('in between');
    // }
  render() {
    return this.props.todos.map(todos=>(
        <TodoItem key={todos.id} todos={todos} delTodo = {this.props.delTodo}
        markComplete= {this.props.markComplete} />
    // <h3>{todos.title}</h3>
    ));
    
}
}

Todos.propTypes = {
    todos:PropTypes.array.isRequired
}

export default Todos;

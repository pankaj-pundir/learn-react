import  React ,{ Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';

import AddTodo from './components/AddTodo';
import {v4} from 'uuid';

import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [{
      id: v4(),
      title: 'task1',
      completed: false
    },
    {
      id: v4(),
      title: 'task2',
      completed: false
    },
    {
      id: v4(),
      title: 'task3',
      completed: true
    }
    ]
  }

  markComplete = (id) => {
        // console.log(id);
        this.setState(
          {
          todos:this.state.todos.map(todo => {

          todo.completed = (todo.id === id)? !todo.completed: todo.completed
          return todo;

        })})}

         
delTodo = (id) =>{
  this.setState({todos: [...this.state.todos.filter(
    todo=>
      todo.id !== id
    
  )]})
}

addTodo = (e) =>{
  console.log(e);
  const newTodo = {
    id:v4(),
    title:e,
    completed:false
  }
  this.setState({todos:[...this.state.todos,newTodo]});
}

  render() {
    console.log(this.state);
    return (
      <Router>
      <div>
       <Header/>
        <Route exact path="/" render={props =>(
          <React.Fragment>
             
              <AddTodo addTodo={this.addTodo} />
              <Todos todos = {this.state.todos} 
              delTodo = {this.delTodo}
              markComplete = {this.markComplete} />
           </React.Fragment>
        )} />
        
        <Route component={About} path='/about' />
          
        
       </div>

      </Router>
      
    );
  }
}

export default App;

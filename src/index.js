import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/TodoItem.css';
// import App from './App';
import Todos from './components/Todos';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';

ReactDOM.render(<Todos />, document.getElementById('todo-wrapper'));

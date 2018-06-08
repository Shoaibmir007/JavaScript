import React from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import '../css/Todos.css'

//Create Component
export default class Todos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: ['wash up', 'eat some food', 'take a nap'],
		}
	}
	render() {
		var todos = this.state.todos;
		todos = todos.map( (item, index) => {
			return(
				<TodoItem item={item} key={index} index={index} onDelete={this.onDelete.bind(this)} />
			);
		});
		return (
			<div id="todo-list">
				<h3>
					<span className="total">Total:{this.state.todos.length}</span>
					{/* <span>Remaining:</span> */}
				</h3>
				<AddItem onAdd={this.onAdd.bind(this)} />
				<ul>{todos}</ul>
			</div>
		);
	}
	// Custom functions
	onDelete(index) {
		let updatedTodos = this.state.todos;
		updatedTodos.splice(index, 1);
		this.setState({ todos: updatedTodos });
	}
	onAdd(item) {
		let newTodos = this.state.todos;
		newTodos.push(item);
		this.setState({ todos: newTodos });
	}
}
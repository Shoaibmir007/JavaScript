import React from 'react';
import '../css/TodoItem.css'

//Create Component
export default class TodoItem extends React.Component {
	render() {
		return (
			<li>
				<div className="todo-item">
					<span className="item-name" onClick={this.handleItem.bind(this)}>{this.props.item}</span>
					<span className="item-delete" onClick={this.handleDelete.bind(this)}> x </span>
				</div>
			</li>
		);
	}
	// Custom functions
	handleDelete() {
		this.props.onDelete(this.props.item)
	}
	handleItem(e) {
		e.target.className += " done";
	}
}
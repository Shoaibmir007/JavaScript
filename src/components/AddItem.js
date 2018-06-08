import React from 'react';
import '../css/AddItem.css'


export default class AddItem extends React.Component {
    render() {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="What needs to be done?" ref="newItem" />
                <input type="submit" value="add" />
            </form>
        );
    }
    // Custom Functions
    handleSubmit(e) {
        e.preventDefault();
        if (this.refs.newItem.value){
            this.props.onAdd(this.refs.newItem.value);
            this.refs.newItem.value = '';
        }
    }
}
import React, { Component } from 'react';
import '../styling/TodoList.css';
import TodoLog from "./TodoLog";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoItems: []
        };

        this.inputField = React.createRef();

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        var input = this.inputField.current.value

        if (input !== "") {
            var newTodoItem = {
                key: Date.now(),
                text: input
            }

            this.setState((prevState) => {
                return {
                    todoItems: prevState.todoItems.concat(newTodoItem)
                };
            });
        }

        //Reset input field
        this.inputField.current.value = "";

        //Prevent form reload
        e.preventDefault();
    }

    deleteItem(key) {
        this.setState({
            todoItems: this.state.todoItems.filter(todoItem => todoItem.key !== key)
        });
    }

    render() {
        return (
            <div className="todo-app">
                <form className="todo-create" onSubmit={this.addItem}>
                    <input type="text" className="form-control todo-add" placeholder="Enter a todo" maxLength="100" ref={this.inputField}/>
                </form>

                <div className="todo-log">
                    <TodoLog items={this.state.todoItems}
                             delete={this.deleteItem}/>
                </div>
            </div>
        );
    }
}

export default TodoList
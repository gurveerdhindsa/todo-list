import React, { Component } from 'react';
import '../styling/TodoList.css';
import TodoItems from "./TodoLog";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoItems: []
        };

        this.inputField = React.createRef();

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();

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
            })
        }
    }

    render() {
        return (
            <div className="input-group">
                <form className="todo-create" onSubmit={this.addItem}>
                    <input type="text" className="form-control" placeholder="Enter a todo" ref={this.inputField}/>
                    <button className="btn btn-default" type="submit">Go!</button>
                </form>

                <TodoLog entries={this.state.todoItems}/>
            </div>
        );
    }
}

export default TodoList;
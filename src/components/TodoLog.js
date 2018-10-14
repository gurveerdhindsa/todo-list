import React, { Component } from 'react';
import '../styling/TodoLog.css';

class TodoLog extends Component {

    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var listItems = this.props.items.map(item => <li className="todo animated fadeInDown"
                                                         onClick={() => this.delete(item.key)}
                                                         key={item.key}>{item.text}</li>)

        return (
            <div>
                {listItems}
            </div>
        );
    }

}

export default TodoLog
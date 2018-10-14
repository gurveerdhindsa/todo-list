import React, { Component } from 'react';
import '../styling/TodoLog.css';

class TodoLog extends Component {

    render() {
        var listItems = this.props.items.map(item => <li key={item.key}>{item.text}</li>)

        return (
            <div>
                {listItems}
            </div>
        );
    }

}

export default TodoLog
import React from "react";
import ReactDOM from "react-dom";
import "./styling/index.css";

import TodoList from './components/TodoList';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);
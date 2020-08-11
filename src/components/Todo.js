import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import cx from "classnames";

const Todo = ({ todo, toggleTodo }) => {
    return (
        <li  className="todo-item" onClick={() => toggleTodo(todo.id)}>
            {todo && todo.completed ? "👌" : "👋"}{" "}
            <span
                className={cx(
                    "todo-item__text",
                    todo && todo.completed && "todo-item__text--completed"
                )}
            >
                {todo.content}
            </span>
        </li>
    )
}

export default connect(
    null,
    {
        toggleTodo
    }
)(Todo)
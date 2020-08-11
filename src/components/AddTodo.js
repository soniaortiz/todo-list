import { connect } from 'react-redux'
import { addTodo } from '../redux/actions' // action creator
import React from 'react'


class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }

    }

    handleInput =({target})=> {
        console.log('e', target.value)
        this.setState({
            input: target.value
        })
    }

    handleAddTodo= ()=>{

        this.props.addTodo(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.handleInput}
                    value={this.state.input}
                />
                <button
                    className={"add-todo"}
                    onClick={this.handleAddTodo}
                >
                    Add Todo
                </button>

            </div>
        )
    }

}

export default connect(
    null,
    { addTodo }
)(AddTodo)
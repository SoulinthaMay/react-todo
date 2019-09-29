var React = require('react');

var AddTodo = React.createClass ({
    onFormSubmit: function(e) {
        e.preventDefault();
        var todos = this.refs.todos.value;

        if (todos.length > 0) {
            this.refs.todos.value = "";
            this.props.onAddTodo(todos);
        } else {
            this.refs.todos.focus();
        }
    },

    render: function (){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todos" placeholder="Add new todo"/>
                    <button className="button">Add</button>
                </form>
            </div>
        );
    }
});
module.exports = AddTodo;
import { Component } from 'react';
import Count from './Count';
import Button from './Button';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, text: 'Just some demo tasks' },
        { id: 2, text: 'As an example' },
      ],
      editingId: null,
      editInputVal: '',
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleEditInputChange(e) {
    this.setState({
      editInputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const text = this.state.inputVal.trim();

    if (text === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    this.setState((state) => ({
      todos: [...state.todos, newTodo],
      inputVal: '',
    }));
  }

  handleDelete(id) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }

  handleEdit(todo) {
    this.setState({
      editingId: todo.id,
      editInputVal: todo.text,
    });
  }

  handleResubmit() {
    const text = this.state.editInputVal.trim();

    if (text === '') {
      return;
    }

    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === state.editingId ? { ...todo, text: text } : todo,
      ),
      editingId: null,
      editInputVal: '',
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>

          <input
            id="task-entry"
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>

        <h4>All the tasks!</h4>

        <ul>
          {this.state.todos.map((todo) =>
            this.state.editingId === todo.id ? (
              <li key={todo.id}>
                <input
                  onChange={this.handleEditInputChange}
                  value={this.state.editInputVal}
                  type="text"
                  name="editTodo"
                  id={`edit-todo-${todo.id}`}
                />
                <Button
                  text="Resubmit"
                  type="button"
                  onClick={this.handleResubmit}
                />
              </li>
            ) : (
              <li key={todo.id}>
                {todo.text}{' '}
                <Button
                  text="❌"
                  type="button"
                  onClick={() => this.handleDelete(todo.id)}
                />
                <Button
                  text="Edit"
                  type="button"
                  onClick={() => this.handleEdit(todo)}
                />
              </li>
            ),
          )}
        </ul>
        <Count count={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;

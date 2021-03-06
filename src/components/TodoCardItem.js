import React from 'react';
import {observer} from 'mobx-react';

import TodoStore from '../stores/TodoStore';


@observer
class TodoCardItem extends React.Component {

  toggleTask() {
    let task = this.props.todo;
    TodoStore.toggleTask(task)
  }

  render() {
    var taskStyle = {
      'color' : this.props.todo.isDone ? 'green' : 'red',
      'cursor': 'pointer'
    };

    return (
      <tr>
        <td>
          <input type="checkbox" checked={this.props.todo.isDone}
                 onChange={this.toggleTask.bind(this)}/>
        </td>
        <td style={taskStyle} onClick={this.toggleTask.bind(this)}>{this.props.todo.name}</td>
      </tr>
    )
  }
}

export default TodoCardItem;
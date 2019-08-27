import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../actions';

class ListItem extends Component {
  handleComplete = completeTodo => {
    const {completeTodo} = this.props;
    completeTodo(completeTodo);
  };
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key="toDoName">
        
          {todo.title}
          <span onClick={() => this.handleComplete(todoId)}><i>Done</i></span>
        
      </div>
    );
  }
}

export default connect(null, {completeTodo})(ListItem);
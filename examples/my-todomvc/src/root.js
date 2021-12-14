import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoActions from './data/TodoActions';

ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');
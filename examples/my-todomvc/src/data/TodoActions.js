import ActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: ActionTypes.ADD_TODO,
            text,
        });
    },
    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: ActionTypes.DELETE_TODO,
            id,
        })
    },
    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: ActionTypes.TOGGLE_TODO,
            id,
        })
    }
};

export default Actions;
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Todo from './Todo'
import Counter from './Counter';

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap()
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_TODO:
             if(!action.text){
                 return state
             }

             const id = Counter.increment();
             return state.set(id, new Todo({
                 id,
                 text: action.text,
                 complete: false
             }))
            case ActionTypes.DELETE_TODO:
                if(!action.id){
                    return;
                }
                return state.delete(action.id)
            case ActionTypes.TOGGLE_TODO:
                if(!action.id){
                    return;
                }
                return state.update(
                    action.id,
                    todo => todo.set('complete', !todo.complete)
                )
            default:
                return state
        }
    }
}

export default new TodoStore();
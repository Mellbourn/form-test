import { createStore, combineReducers } from 'redux';

const text = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return action.text;
        default:
            return state;
    }
}

const formTestApp = combineReducers({
    text
})

export default createStore(formTestApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
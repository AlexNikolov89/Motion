import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import authReducer from './reducers/authReducer';
import {regValReducer} from './reducers/regValReducer'
import {postReducer} from './reducers/postReducer'


const reducer = combineReducers({
    authReducer,
    regValReducer,
    postReducer
})



const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;
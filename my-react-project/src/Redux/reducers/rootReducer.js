import {combine, combineReducers} from 'redux';
import counterReducer from './counterReducer';
import ListPersonReducer from './listPersonReducer';

const rootReducer = combineReducers({
       myCounter: counterReducer,
       listPerson: ListPersonReducer,
})

export default rootReducer
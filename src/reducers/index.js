import { combineReducers } from 'redux';
import mediaReducer from "../reducers/mediareducer"

const rootReducer = combineReducers({
media:mediaReducer
});

export default rootReducer
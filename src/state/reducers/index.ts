import { combineReducers } from "redux";
import repositoryReducers from './repositoryReducer';
const reducers = combineReducers({repositories: repositoryReducers});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
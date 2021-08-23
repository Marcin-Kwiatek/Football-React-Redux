import { combineReducers } from "redux";
import ballonReducer from "./ballonWinners/duck";

const rootReducer = combineReducers({
    ballons: ballonReducer
})

export default rootReducer
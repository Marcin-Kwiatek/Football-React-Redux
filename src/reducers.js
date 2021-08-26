import { combineReducers } from "redux";
import ballonReducer from "./ballonWinners/duck";
import championsReducer from "./championsLeagueWinners/duck";

const rootReducer = combineReducers({
    ballons: ballonReducer,
    champions: championsReducer
})

export default rootReducer
import { combineReducers } from "redux";
import ballonReducer from "./ballonWinners/duck";
import championsReducer from "./championsLeagueWinners/duck";
import worldReducer from "./WorldChampionshipWinners/duck";

const rootReducer = combineReducers({
    ballons: ballonReducer,
    champions: championsReducer,
    world: worldReducer
})

export default rootReducer
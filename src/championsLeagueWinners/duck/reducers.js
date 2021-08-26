import types from "./types"

const INICIAL_STATE = {
    listName: "Champions League Winners",
    list: [
        { club: "REAL MADRID", trophies: 13 },
        { club: "AC MILAN", trophies: 7 },
        { club: "FC BAYERN MUNICH", trophies: 6 },
    ]
}

const championsReducer = (state = INICIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_CHAMPIONS:
            return {...state, list: [...state.list, action.item] }
        default:
            return state
    }
}

export default championsReducer
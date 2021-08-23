import types from "./types"

const INICIAL_STATE = {
    listName: "Ballon Winners",
    list: [
        "Lionel Messi", "Luka Modrić", "Cristiano Ronaldo"
    ]
}

const ballonReducer = (state = INICIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_BALLON:
            return {...state, list: [...state.list, action.item] }
        default:
            return state
    }
}

export default ballonReducer
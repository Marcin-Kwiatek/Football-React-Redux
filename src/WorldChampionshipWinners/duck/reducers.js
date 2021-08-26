import types from "./types"

const INICIAL_STATE = {
    listName: "World Championship Winners",
    list: [
        { country: "FRANCE", year: 2018 },
        { country: "GERMANY", year: 2014 },
        { country: "SPAIN", year: 2010 },
        { country: "ITALY", year: 2006 },
        { country: "BRAZIL", year: 2002 },
        { country: "FRANCE", year: 1998 },
        { country: "BRAZIL", year: 1994 }

    ]
}

const worldReducer = (state = INICIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_WORLD:
            return {...state, list: [...state.list, action.item] }
        default:
            return state
    }
}

export default worldReducer
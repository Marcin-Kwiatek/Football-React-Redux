import types from "./types"

const INICIAL_STATE = {
    listName: "Ballon Winners",
    list: [
        { name: "Andrij Szewczenko", year: 2004, points: 175 },
        { name: "Ronaldinho", year: 2005, points: 225 },
        { name: "Fabio Cannavaro", year: 2006, points: 173 },
        { name: "Kaká", year: 2007, points: 444 },
        { name: "Cristiano Ronaldo", year: 2008, points: 446 },
        { name: "Lionel Messi", year: 2009, points: 473 },
        { name: "Lionel Messi", year: 2010, points: '22,65%' },
        { name: "Lionel Messi", year: 2011, points: '47,88%' },
        { name: "Lionel Messi", year: 2012, points: '41,60%' },
        { name: "Cristiano Ronaldo", year: 2013, points: '27,99%' },
        { name: "Cristiano Ronaldo", year: 2014, points: '37,66%' },
        { name: "Lionel Messi", year: 2015, points: '41,33%' },
        { name: "Cristiano Ronaldo", year: 2016, points: 745 },
        { name: "Cristiano Ronaldo", year: 2017, points: 686 },
        { name: "Luka Modrić", year: 2018, points: 753 },
        { name: "Lionel Messi", year: 2019, points: 946 }
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
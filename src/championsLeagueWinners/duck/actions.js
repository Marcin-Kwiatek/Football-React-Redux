import types from './types'

const add = item => ({
    type: types.ADD_CHAMPIONS,
    item
})
const up = club => ({
    type: types.TROPHIES_UP,
    club
})

export default {
    add,
    up
}
import types from './types'

const add = item => ({
    type: types.ADD_CHAMPIONS,
    item
})

export default {
    add
}
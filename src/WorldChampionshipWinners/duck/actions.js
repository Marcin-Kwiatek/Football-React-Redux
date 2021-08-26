import types from './types'

const add = item => ({
    type: types.ADD_WORLD,
    item
})

export default {
    add
}
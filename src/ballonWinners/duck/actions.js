import types from './types'

const add = item => ({
    type: types.ADD_BALLON,
    item
})

export default {
    add
}
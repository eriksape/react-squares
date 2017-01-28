import {
    MOVE
} from './constants'

export const move = (x,y) => ({
    type: MOVE,
    payload:{x,y}
})
import {
    MOVE,
    RESIZE
} from './constants'

export const move = (x,y) => ({
    type: MOVE,
    payload:{x,y}
})

export const resize = size => ({
    type: RESIZE,
    payload:size
})
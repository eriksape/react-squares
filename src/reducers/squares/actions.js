import {
    MOVE,
    RESIZE,
    KEYEVENT
} from './constants'

/**
 * Move the null point to a value point
 * @param x
 * @param y
 */
export const move = (x,y) => ({
    type: MOVE,
    payload:{x,y}
})

/**
 * resize the main square
 * @param size
 */
export const resize = size => ({
    type: RESIZE,
    payload:size
})

/**
 * Move the null point with the keyup event
 * @param key
 */

export const onKeyUp = key => ({
    type: KEYEVENT,
    payload:key
})
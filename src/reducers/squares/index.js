import InitialState from './initialState'
import {
    MOVE,
    RESIZE
} from './constants'

const initialState = new InitialState()

export default (state=initialState, action) => {
    const { type, payload } = action
    const x = state.get('nullPosition').get('x')
    const y = state.get('nullPosition').get('y')
    let value = -1

    switch (type) {
        case MOVE:
            value = state.get('list').get(payload.y).get(payload.x)
            return state
                .setIn(['list', y, x], value)
                .setIn(['list', payload.y, payload.x], null)
                .renew();
        case RESIZE:
            return state.resize(payload)
        default:
            return state
    }
}
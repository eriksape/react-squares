import { Record, List, Map, Range } from 'immutable'

const initialState = Record({
    list:List([
        List([1,2,3]),
        List([4,5,6]),
        List([7,8,null])
    ]),
    nullPosition:Map({x:2, y:2})
})

/**
 * update the nullPosition
 */
initialState.prototype.renew = function() {
    let x = -1, y = -1
    y = this.get('list').findIndex( list => {
        x = list.indexOf(null)
        return x>-1
    })

    return this.set('nullPosition', Map({x,y}))

}
/**
 * A list of positions that null point can move
 * @returns {*|List<T>|List}
 */
initialState.prototype.whoCanMove = function(){
    let canMove = List()
    const x = this.nullPosition.get('x')
    const y = this.nullPosition.get('y')
    const max = this.get('list').size
    const min = -1

    if(y-1 > min){
        canMove = canMove.push("UP")
    }
    if(y+1 < max){
        canMove = canMove.push("DOWN")
    }
    if(x-1 > min){
        canMove = canMove.push("LEFT")
    }
    if(x+1 < max) {
        canMove = canMove.push("RIGHT")
    }
    return canMove
}

/**
 * resize the square e.g. 2x2 3x3
 * @param size
 */
initialState.prototype.resize = function(size){
    let newList = List()
    for (let i = 1; i < size+1; i++){
        if(i===size){
            newList = newList.push(Range(size*(i-1)+1, size*i+1).toList().set(size-1,null))
        } else {
            newList = newList.push(Range(size*(i-1)+1, size*i+1).toList())
        }
    }
    return this
        .set('list', newList)
        .set('nullPosition', Map({x:size-1,y:size-1}))
}

/**
 * keyup event for move the squares
 * @param key
 * @param x
 * @param y
 * @returns the next value of the list
 */
initialState.prototype.onKeyUp = function(key, x, y){
    const canMove = this.whoCanMove().indexOf(key) > -1
    let value = -1
    if(canMove){
        switch (key) {
            case "UP":
                value = this.get('list').get(y-1).get(x)
                return this
                    .setIn(['list', y, x], value)
                    .setIn(['list', y-1, x], null)
            case "DOWN":
                value = this.get('list').get(y+1).get(x)
                return this
                    .setIn(['list', y, x], value)
                    .setIn(['list', y+1, x], null)
            case "LEFT":
                value = this.get('list').get(y).get(x-1)
                return this
                    .setIn(['list', y, x], value)
                    .setIn(['list', y, x-1], null)
            case "RIGHT":
                value = this.get('list').get(y).get(x+1)
                return this
                    .setIn(['list', y, x], value)
                    .setIn(['list', y, x+1], null)
            default:
                return this
        }
    }
    return this
}

export default initialState
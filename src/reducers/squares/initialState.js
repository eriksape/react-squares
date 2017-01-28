import { Record, List, Map, Range } from 'immutable'

const initialState = Record({
    list:List([
        List([1,2,3]),
        List([4,5,6]),
        List([7,8,null])
    ]),
    nullPosition:Map({x:2, y:2})
})

initialState.prototype.renew = function() {
    let x = -1, y = -1
    y = this.get('list').findIndex( list => {
        x = list.indexOf(null)
        return x>-1
    })

    return this.set('nullPosition', Map({x,y}))

}

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

initialState.prototype.resize = function(size){
    let newList = List()
    for (let i = 1; i < size+1; i++){
        if(i==size){
            newList = newList.push(Range(size*(i-1)+1, size*i+1).toList().set(size-1,null))
        } else {
            newList = newList.push(Range(size*(i-1)+1, size*i+1).toList())
        }
    }
    return this
        .set('list', newList)
        .set('nullPosition', Map({x:size-1,y:size-1}))
}

export default initialState
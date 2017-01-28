import { connect } from 'react-redux'
import Component from './component'
import {
    move,
    resize,
    onKeyUp
} from './../../reducers/squares/actions'

const mapStateToProps = (state, ownProps) =>  ({
    squares:state.squares
})

const mapDispatchToProps = (dispatch, ownProps) => ({
     /*
     This is on the point view that i want to move some number to null position
     */
    onClick:(y,x,nullPosition, canMove)=> {
        if( nullPosition.get('x') !== x ||
            nullPosition.get('y') !== y )  {
            if(canMove.indexOf("UP") > -1 &&
                x === nullPosition.get('x') &&
                y+1 === nullPosition.get('y')
            ) {
                dispatch(move(x,y))
            }
            if(canMove.indexOf("DOWN") > -1 &&
                x === nullPosition.get('x') &&
                y-1 === nullPosition.get('y')

            ) {
                dispatch(move(x,y))
            }
            if(canMove.indexOf("LEFT") > -1 &&
                x+1 === nullPosition.get('x') &&
                y === nullPosition.get('y')
            ) {
                dispatch(move(x,y))

            }
            if(canMove.indexOf("RIGHT") > -1 &&
                x-1 === nullPosition.get('x') &&
                y === nullPosition.get('y')
            ) {
                dispatch(move(x,y))

            }

        }
    },
    /*
    This is on the point view that i want to move some number to null position
     */
    onKeyUp: event => {
        switch (event.key){
            case "ArrowUp":
                dispatch(onKeyUp("DOWN"))
                break
            case "ArrowDown":
                dispatch(onKeyUp("UP"))
                break
            case "ArrowLeft":
                dispatch(onKeyUp("RIGHT"))
                break
            case "ArrowRight":
                dispatch(onKeyUp("LEFT"))
                break
            default:
        }
    },
    /*
     I think if the component is enough good you could resize it as you want
     */
    resize: event => {
        const value = parseInt(event.target.value, 10)
        dispatch(resize(value))
    }
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Component)
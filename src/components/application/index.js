import { connect } from 'react-redux'
import Component from './component'
import {
    move
} from './../../reducers/squares/actions'

const mapStateToProps = (state, ownProps) =>  ({
    squares:state.squares
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick:(y,x,nullPosition, canMove)=> {
        console.log(y,x,nullPosition.toJS(), canMove.toJS())
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
    }
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Component)
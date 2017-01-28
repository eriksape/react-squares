import React from 'react'
import Square from './../square'

export default class extends React.Component{
    render(){
        const { squares, onClick, resize } = this.props
        return(
            <div>
                <br/>
                <label>&nbsp;&nbsp;&nbsp;Size of the square</label>
                <select onChange={resize}>
                    <option value="2">2x2</option>
                    <option value="3">3x3</option>
                    <option value="4">4x4</option>
                    <option value="5">5x5</option>
                    <option value="6">6x6</option>

                </select>
                <div className="canvas"
                     style={{
                         background:'black',
                         width:squares.get('list').size*60,
                         height:squares.get('list').size*60
                     }}>
                    {
                        squares.get('list')
                            .map( (list, y) => list
                                .map( (square, x) => (
                                    <Square
                                        key={`${y}.${x}`}
                                        onClick={onClick.bind(null,y,x,squares.nullPosition, squares.whoCanMove())}
                                    >
                                        {square}
                                    </Square>
                                ) )
                            )
                    }
                </div>
            </div>

        )
    }
}
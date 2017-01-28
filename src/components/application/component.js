import React from 'react'
import Square from './../square'

export default class extends React.Component{
    render(){
        const { squares, onClick } = this.props
        return(
            <div>
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
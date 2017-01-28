import React from 'react'
import classNames from 'classnames'

export default React.createClass({
    render(){
        const { children, onClick, onKeyUp } = this.props
        const className = classNames("box", {"empty": children === null})
        return (
            <div className={className} onClick={onClick} onKeyUp={onKeyUp} >
                <div>{children}</div>
            </div>
        )
    }
});
import React from 'react'
import classNames from 'classnames'

export default React.createClass({
    render(){
        const { children, onClick } = this.props
        const className = classNames("box", {"empty": children === null})
        return (
            <div className={className} onClick={onClick}>
                <div>{children}</div>
            </div>
        )
    }
});
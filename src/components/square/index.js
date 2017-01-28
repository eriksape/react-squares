import React from 'react'
import classNames from 'classnames'

export default React.createClass({
    render(){
        const { children } = this.props
        const className = classNames("box", {"empty": children === null})
        return (
            <div className={className}>
                <div>{children}</div>
            </div>
        )
    }
});
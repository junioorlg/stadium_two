import React, { Component } from 'react'
// SCSS
import './internal.scss'

class Internal extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { 
            title,
            paragraph
         } = this.props

        return (
            <div className="internal-component">
                <div className="row">
                    <div className="col s12">
                        <h1>{title}</h1>
                    </div>
                    <div className="col s12 m11">
                        <p>{paragraph}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Internal
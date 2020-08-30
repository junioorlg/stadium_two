import React, { Component } from 'react'
// SCSS
import './internal.scss'

//Languages
import { withTranslation } from 'react-i18next'

class Internal extends Component {

    render() {
        var { 
            title,
            paragraph
         } = this.props

        title = this.props.t(title);
        paragraph = this.props.t(paragraph)

        return (
            <div className="internal-component">
                <div className="row">
                    <div className="col s12">
                        <h1>                        
                            {title.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>
                            })}
                        </h1>
                    </div>
                    <div className="col s12 m11">
                        <p>{paragraph}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Internal)
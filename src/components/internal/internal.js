import React from 'react'

// SCSS
import './internal.scss'

// Component
import SocialEntretenimiento from '../socialEntretenimiento/socialEntretenimiento';

//Languages
import { withTranslation, useTranslation } from 'react-i18next'

const Internal = ({ title, paragraph, isEntretenimiento = false }) => {

    const { t } = useTranslation()

    title = t( title )
    paragraph = t( paragraph )

    return (
        <div className="internal-component">
            <div className="row">
                <div className="col s12 container-title">
                    <h1>
                        <div className='title-spans'>
                            {title.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>
                            })}
                        </div>                        

                        {
                            isEntretenimiento
                            ? <SocialEntretenimiento from='internal' />
                            : null
                        }
                    </h1>
                </div>
                <div className="col s12 m11">
                    <p>{paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Internal)
import React from 'react';
import './internal-section-body.scss';

import { Link } from "react-router-dom";

function InternalSectionBody ( props ) {

    const { 
        title,
        paragraph 
    } = props;

    return (
        <React.Fragment>
            <div className="internal-section-body">
                <h1>{title}</h1>
                {
                    paragraph.map(( text, i) => {
                        return(
                            <p>{text}</p>
                        );
                    })
                }

                <div className="contactanos">
                    <Link to="/">contactanos</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InternalSectionBody;
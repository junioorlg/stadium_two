import React from 'react';
import './internal-section-media.scss';

function InternalSectionMedia ( props ) {

    const { img } = props;
    
    let media = {
      width: '100%',
      height: `100vh`,
      backgroundColor: `#000`,
      backgroundImage: `url(${img})`,
      // or to use a fixed background image
      // backgroundImage: `url(/path/to/static/preview.png)`,
      backgroundPosition: `center center`,
      backgroundRepeat: `no-repeat`
    };

    return (
        <React.Fragment>
            <div className="internal-section-media">
                <div className="media" style={media}></div>
            </div>
        </React.Fragment>
    );
}

export default InternalSectionMedia;
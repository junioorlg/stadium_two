import React, { useEffect } from 'react';

import Menu from '../../components/menu/menu';
import Social from '../../components/social/social';

function Main ( props ) {

    useEffect(() => {
        document.querySelector('.container').style.opacity = 1;

        return() => { document.querySelector('.container').style.opacity = 0}
      }, [])

    const { children } = props;

    return (
        <React.Fragment>
            <Social />
            <Menu />
            
            {children}
        </React.Fragment>
    );
}

export default Main;
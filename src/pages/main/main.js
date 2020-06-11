import React from 'react';

import Menu from '../../components/menu/menu';
import Social from '../../components/social/social';

function Main ( props ) {

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
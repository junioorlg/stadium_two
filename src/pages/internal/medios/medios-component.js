import React from 'react';

/* Components */
import Main from '../../main/main';
import Gallery from './../../../components/gallery/gallery';

import  {data} from './data';

function MediosComponent ( props ) {

    return (
        <Main>
            <div className="page-internal component medios">
                <Gallery pepe={data} />
            </div>
        </Main>
    );
}

export default MediosComponent;

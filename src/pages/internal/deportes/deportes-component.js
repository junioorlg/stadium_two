import React from 'react';

/* Components */
import Main from './../../main/main';
import InternalSectionMedia from './../../../components/internal-section-media/internal-section-media';
import InternalSectionBody from './../../../components/internal-section-body/internal-section-body';

function DeportesComponent ( props ) {

    const title = 'deportes';
    const paragraph = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione alias mollitia exercitationem, consectetur, temporibus facere cumque laboriosam fugit asperiores, accusamus veniam ducimus voluptatum facilis iusto recusandae. Explicabo incidunt eos voluptates officia totam vitae voluptate porro, perspiciatis, suscipit odio rerum cupiditate commodi expedita praesentium iusto soluta deleniti fuga, eligendi qui.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione alias mollitia exercitationem, consectetur, temporibus facere cumque laboriosam fugit asperiores, accusamus veniam ducimus voluptatum facilis iusto recusandae. Explicabo incidunt eos voluptates officia totam vitae voluptate porro, perspiciatis.',
    ]
    
    const img = require('./../../../media/paleta.png');

    return (
        <Main>
            <div className="component deportes">
                <InternalSectionBody title={title} paragraph={paragraph} />
                <InternalSectionMedia img={img} />
            </div>
        </Main>
    );
}

export default DeportesComponent;

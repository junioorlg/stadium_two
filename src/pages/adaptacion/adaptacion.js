import React from 'react'
import Main from './../main/main'
import './adaptacion.scss'
import adaptacionImg1 from '../../media/adaptacion/adaptacion.PNG'

function Deportivo ( props ) {
    
    return (
        <Main>
            <div className="container">
                <img className='responsive-img' src={adaptacionImg1} atl="adaptacion-img"/>   
            </div>

            <div className="page-subtitle-container">
                <h6 className="page-subtitle">CONTACTO</h6>
            </div>
        </Main>
    );
}

export default Deportivo;

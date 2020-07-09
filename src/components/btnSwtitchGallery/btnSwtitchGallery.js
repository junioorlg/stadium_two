import React, { Component } from 'react'

// SCSS
import './btnSwtitchGallery.scss'

// Images
import imgVolver from '../../media/volver.png'


class BtnSwtitchGallery extends Component {

    constructor (props) {
        super(props)
    }

    toogleGallery = () => {
        const internal = document.querySelector('.internal')

        if (this.props.direction === 'go') {
            internal.style.left = "-100%";
        } else {
            internal.style.left = "0%";
        }
    }

    render() {
        const direction = this.props.direction;
        const classDirection = `btn-gallery ${direction}`; 

        return (
            <div className="btn-switch-gallery-component">
                <div className={classDirection}>
                    <Buttone direction={direction} that={this} />
                    {/*<img className="responsive-img" src={imgVolver} onClick={this.toogleGallery} alt="swith gallery" />*/}
                </div>
            </div>
        )
    }
}

function Buttone (props) {
    
    const {
        direction,
        that
    } = props;

    if (direction === 'go') {
        return <button className="btn" onClick={that.toogleGallery}>Ver Proyectos <i class="material-icons right">keyboard_arrow_right</i></button>
    } else {
        return <button className="btn" onClick={that.toogleGallery}><i class="material-icons left">keyboard_arrow_left</i> Volver</button>
    }
}

export default BtnSwtitchGallery
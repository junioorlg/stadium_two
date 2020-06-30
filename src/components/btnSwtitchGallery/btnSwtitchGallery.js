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
                    <img className="responsive-img" src={imgVolver} onClick={this.toogleGallery} alt="swith gallery" />
                </div>
            </div>
        )
    }
}

export default BtnSwtitchGallery
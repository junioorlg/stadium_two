import React from 'react'

// SCSS
import './socialEntretenimiento.scss'

const SocialEntretenimiento = ({ from = '' }) => {

    let classs = ''

    if ( from !== '' ) {
        classs = 'from-' + from;
    }

    return (
        <div className={ `internal-component container-icons-entretenimiento ${ classs }` }>
            <img src="/media/logo-instagram.png" title="instagram" alt="logo instagram" className="responsive-img" />
            <img src="/media/logo-tiktok.png" title="tiktok" alt="logo tiktok" className="responsive-img" />
            <img src="/media/logo-facebook.png" title="facebook" alt="logo facebook" className="responsive-img" />
            <img src="/media/logo-twitter.png" title="twitter" alt="logo twitter" className="responsive-img" />
            <img src="/media/logo-youtube.png" title="youtube" alt="logo youtube" className="responsive-img" />
        </div>
    )
}

export default SocialEntretenimiento
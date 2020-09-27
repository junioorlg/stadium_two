import React, { Component } from 'react'
import Slider from "react-slick"
import M from 'materialize-css'

// SCSS
import '../../media/arrow.png'
// SCSS
import './gallery.scss'

// Components
import IframeYoutube from './IframeYoutube'

class Gallery extends Component {

    constructor(props) {
        super(props)

        const firstSlider = this.props.data[0]

        this.state = {
            name: firstSlider.name,
            imgPreview: firstSlider.imgPreview,
            idYoutube: firstSlider.idYoutube,
            isVideo: firstSlider.isVideo,
            isCloseModal: true
        }
    }
    
    componentDidMount() {

        const optionsModal = {
            onOpenStart: () => { this.setState({ isCloseModal: false }) },
            onCloseStart: () => { this.setState({ isCloseModal: true }) },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "10%"
        }
        
        M.Modal.init(this.Modal, optionsModal)
    }

    handleChangeElementGallery = (e) => {
        const id = parseInt(e.target.getAttribute('data-id'))
        const data = this.props.data
        const slider = data.find(x => x.id === id )
        const sliders = document.getElementsByClassName('box-preview-bg')

        this.setState({
            name: slider.name,
            anio: slider.anio,
            description: slider.description,
            imgPreview: slider.imgPreview,
            idYoutube: slider.idYoutube,
            isVideo: slider.isVideo,
        })

        for (let i = 0; i < sliders.length; i++)
            sliders[i].classList.add('inactive')

        e.target.classList.remove('inactive')
    }

    render() {
        const { 
            data
         } = this.props

        const { 
            name,
            imgPreview, 
            idYoutube, 
            isVideo,
            isCloseModal
        } = this.state

        const cantElms = this.props.data.length

        const cantSlideToShow = cantElms > 3 ? 4 : (cantElms > 2 ? 3 : 2);

        const settingsSlider = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: cantSlideToShow,
            vertical: false,
            swipeToSlide: true,
            draggable: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    infinite: true,
                }
              }
            ]
        }

        return (
            <div className="gallery-component">
                <div className="gallery-body">
                    <div className="row">
                        <div className="col s12">
                            <Slider {...settingsSlider}>
                                {
                                    data.map((val, i) => {
                                        return (
                                            <div className="col s12" key={i}>
                                                <div className="col s12">
                                                    <div
                                                        className="box-preview  modal-trigger" 
                                                        href="#modal1"
                                                        onClick={this.handleChangeElementGallery}>
                                                        
                                                        <div
                                                            data-id={val.id}
                                                            className="box-preview-bg inactive"
                                                            data-video={val.isVideo ? '1': '0'}
                                                            style={{
                                                                backgroundImage: `url(${(val.imgSlider) || "https://dummyimage.com/100x100/000/fff"})`
                                                            }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>

                <div
                    id="modal1"
                    className="modal"
                    ref={
                        Modal => { this.Modal = Modal }
                    }>

                    <div className="modal-content">
                        <ModalContent 
                            isCloseModal={isCloseModal}
                            isVideo={isVideo}
                            idYoutube={idYoutube}
                            imgPreview={imgPreview}
                            name={name}/>
                    </div>

                    <span href="# " className="modal-close">&nbsp;</span>
                </div>


            </div>
        )
    }
}

function ModalContent (props) {
    
    const {
        isVideo,
        idYoutube,
        imgPreview,
        name,
        isCloseModal
    } = props;

    if (isCloseModal) return '';

    if (isVideo) return <IframeYoutube id={idYoutube} />

    return <img src={imgPreview} className="responsive-img" alt={name} />
}

export default Gallery
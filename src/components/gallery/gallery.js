import React, { Component } from 'react'
import Slider from "react-slick"
import M from 'materialize-css'

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
            anio: firstSlider.anio,
            description: firstSlider.description,
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
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        }
        
        M.Modal.init(this.Modal, optionsModal)
    }

    handleChangeElementGallery = (e) => {
        const id = parseInt(e.target.getAttribute('data-id'))
        const data = this.props.data
        const slider = data.find(x => x.id === id )

        this.setState({
            name: slider.name,
            anio: slider.anio,
            description: slider.description,
            imgPreview: slider.imgPreview,
            idYoutube: slider.idYoutube,
            isVideo: slider.isVideo,
        })
    }

    render() {
        const { data } = this.props

        const { 
            name, 
            anio, 
            description, 
            imgPreview, 
            idYoutube, 
            isVideo,
            isCloseModal
        } = this.state

        const settingsSlider = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            swipeToSlide: true
        }

        return (
            <div className="gallery-component">
                <h5>Marketing deportivo</h5>

                <div className="gallery-body">
                    <div className="row">
                        <div 
                            className="col s5 gallery-principal-image modal-trigger"
                            href="#modal1"
                            onClick={this.handleOpenModal}>
                            <div className={isVideo ? 'play-video' : 'play-video hide'}></div>
                            <img src={imgPreview} className="responsive-img" alt={name} />
                        </div>

                        <div className="col s7 gallery-info">
                            <p className="name">{name}</p>
                            <p className="anio">Año: {anio}</p>
                            <p className="description">{description}</p>
                        </div>
                    </div>
                </div>
                
                <Slider {...settingsSlider}>
                    {
                        data.map((val, i) => {
                            return (
                                <div 
                                    key={i} 
                                    className="box-preview" 
                                    onClick={this.handleChangeElementGallery}>
                                    
                                    <div
                                        data-id={val.id}
                                        className="box-preview-bg" 
                                        style={{
                                            backgroundImage: `url(${(val.imgSlider) || "https://dummyimage.com/100x100/000/fff"})`
                                        }}>
                                        </div>
                                </div>
                            )
                        })
                    }
                </Slider>

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

                    <a href="#" className="modal-close"></a>
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
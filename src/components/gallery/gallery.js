import React, { Component } from 'react';
import './gallery.scss';

import Slider from "react-slick";

class Gallery extends Component {
    
    constructor( props ) {
        super(props)

        this.openElementGallery = this.openElementGallery.bind(this);
    }

    openElementGallery(e) {
        console.log(e);
        console.log('click');
    }

    render() {
        const { pepe } = this.props;

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            swipeToSlide: true,
            beforeChange: (current, next) => console.log(next)
        };

        return (
            <div className="gallery-component">
                <h3>Marketing deportivo</h3>

                <div className="gallery-body">
                    <div className="row">
                        <div className="col s5 gallery-principal-image">
                            <img src="./media/abzurdah_produccion.png" className="responsive-img" alt="lala" />
                        </div>

                        <div className="col s7 gallery-info">
                            <h4>Radio: Oral Deportiva</h4>
                            <p>Anio: 2019</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe.</p>
                        </div>
                    </div>
                </div>
                
                <Slider {...settings}>
                    {
                        pepe.map((val, i) => {
                            return (
                                <div 
                                    key={i} 
                                    className="box-preview" 
                                    onClick={this.openElementGallery}
                                    data-id={val.id}>
                                    
                                    <div 
                                        className="box-preview-bg" 
                                        style={{
                                            backgroundImage: `url(${(val.imgSlider) || "https://dummyimage.com/100x100/000/fff"})`
                                        }}>
                                        </div>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        );
    }
}

export default Gallery;
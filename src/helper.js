import { data as dataMedio } from './pages/medios/data';
import { data as dataEvento } from './pages/eventos/data';
import { data as dataDeportivo } from './pages/deportivo/data';
import { data as dataEntretenimiento } from './pages/entretenimientos/data';

export const initAllImage = () => {
    const container = document.querySelector('#all-images')

    const allImages = {
        images: [
            './media/gallery/estrategias/strategy.png',
            './media/equipo/bg-img.jpg'
        ],
        gallerys: [
            dataMedio,
            dataEvento,
            dataDeportivo,
            dataEntretenimiento
        ]
    }

    printImages(container, allImages.images)
    printImagesGallery(container, allImages.gallerys)
}

const printImages = (container, imgs) => {
    imgs.forEach( img => {
        printImage(container, img)
    })
}

const printImagesGallery = (container, gallerys) => {
    gallerys.forEach( gallery => {
        gallery.forEach( elm => {
            printImage(container, elm.imgSlider)
        })
    })
}

const printImage = (container, url) => {
    const img = new Image()

    img.src = url
    img.style = 'display: none'

    container.appendChild(img)
}
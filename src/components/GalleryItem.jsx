import React from 'react';
import ModalImage from "react-modal-image";
import '../assets/styles/components/GalleryItem.scss';
import '../assets/styles/Hovers.scss';

const GalleryItem = (props) => {
    return (
        <div className='gallery-item'>
            <ModalImage
                className='image hvr-grow'
                hideDownload='true'
                hideZoom='true'
                small={props.img}
                large={props.img}
                alt="Maquinaria"
                overlayClassName="Overlay"
            />;
             <p className='text'>{props.text}</p>
        </div>
    )
}

export default GalleryItem

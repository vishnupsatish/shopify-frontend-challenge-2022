import React, { useEffect, useState } from 'react';
import { Stack, SkeletonBodyText } from '@shopify/polaris'
import ImageItem from '../components/ImageItem';
import { getImages } from '../Utils'



const ImageList = (props) => {


    return (
        <React.Fragment>
            {props.images === null
                ? <SkeletonBodyText lines={6} />
                : props.images.map((image, _) => (
                    <ImageItem key={image.date} image={image} />
                ))
            }
        </React.Fragment>
    );
}

export default ImageList;

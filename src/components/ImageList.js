import React, { useEffect, useState } from 'react';
import { Stack, SkeletonBodyText } from '@shopify/polaris'
import ImageItem from '../components/ImageItem';
import { getImages } from '../Utils'



const ImageList = (props) => {


    return (
        <Stack vertical={true}>
            {props.images.map((image, _) => (
                <ImageItem key={image.date} image={image} />
            ))}
        </Stack>
    );
}

export default ImageList;

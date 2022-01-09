import React from 'react';
import { Stack } from '@shopify/polaris'
import ImageItem from '../components/ImageItem';


// Displays a list of images
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

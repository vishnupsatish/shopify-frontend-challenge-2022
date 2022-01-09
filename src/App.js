import React, { useState, useEffect, useRef } from 'react';
import { Layout, Card, TextField, SkeletonBodyText } from '@shopify/polaris';
import ImageItem from './components/ImageItem';
import ImageList from './components/ImageList'
import Options from './components/Options'
import { getImages } from './Utils'



const App = () => {
    const [images, setImages] = useState(null);
    const [imagesLoading, setImagesLoading] = useState(false);

    const currentURL = new URL(window.location.href);
    const imageDate = currentURL.searchParams.get('image');

    const loadImages = (params, single = false) => {
        setImages(null);
        setImagesLoading(true);

        getImages(params).then((data) => {
            if (single) {
                setImages([data]);
            } else {
                setImages(data);
            }
        })
    }

    if (images === null && !imagesLoading) {
        if (imageDate === null) {
            loadImages({ count: 10 })
        } else if (imageDate !== null && images === null && !imagesLoading) {
            loadImages({ date: imageDate }, true)
        }
    }


    return (
        <Layout>
            <Layout.Section>
                {images === null
                    ? <SkeletonBodyText lines={6} />
                    : <ImageList images={images} />
                }

            </Layout.Section>
            <Layout.Section secondary>
                <Options loadImages={loadImages} />
            </Layout.Section>
        </Layout>

    );
}

export default App;

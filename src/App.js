import React, { useState } from 'react';
import { Layout, SkeletonBodyText } from '@shopify/polaris';
import ImageList from './components/ImageList'
import Options from './components/Options'
import { getImages } from './Utils'


// The main app component
const App = () => {
    const [images, setImages] = useState(null);

    // Determines whether media are currently loading
    const [imagesLoading, setImagesLoading] = useState(false);

    // Try to get the 'media' parameter to determine if a certain image is to be shown
    const currentURL = new URL(window.location.href);
    const imageDate = currentURL.searchParams.get('media');

    // Loads media given parameters to pass to the NASA API and whether a single image (versus multiple pieces of media) have been requested
    const loadImages = (params, single = false) => {
        // If media is currently not loading, the load them
        if (!imagesLoading) {
            setImages(null);
            setImagesLoading(true);

            // Load data from the API and set state to the result
            getImages(params).then((data) => {
                console.log(data)
                if (single) {
                    setImages([data]);
                } else {
                    setImages(data);
                }
                setImagesLoading(false);
            })
        }
    }

    // If there are currently no images shown, try to load images
    if (images === null) {
        if (imageDate === null) {
            loadImages({ count: 10 })
        } else if (imageDate !== null) { // If a specific image was requested
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

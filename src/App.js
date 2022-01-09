import React, { useState, useEffect, useRef } from 'react';
import { Layout, Card } from '@shopify/polaris';
import ImageItem from './components/ImageItem';
import ImageList from './components/ImageList'
import { getImages } from './Utils'



const App = () => {
    const [images, setImages] = useState(null);

    const currentURL = new URL(window.location.href);
    const imageDate = currentURL.searchParams.get('image');


    console.log(images)

    useEffect(() => {
        if (imageDate === null && images === null) {
            // getImages returns a promise so get the return value once the promise value is fulfilled
            getImages({ count: 10 }).then((data) => {
                console.log(data);
                setImages(data);
            })
        }

        if (imageDate !== null && images === null) {
            getImages({ date: imageDate }).then((data) => {
                setImages([data]);
            })
        }
    })
    

    return (
        <Layout>
            <Layout.Section>
                <ImageList images={images}/>
            </Layout.Section>
            <Layout.Section secondary>
                <Card title="Your Liked Pictures" sectioned>
                    <p>Add tags to your order.</p>
                </Card>
            </Layout.Section>
        </Layout>

    );
}

export default App;

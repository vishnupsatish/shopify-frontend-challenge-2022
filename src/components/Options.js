import React, { useState } from 'react';
import { Card, RangeSlider } from '@shopify/polaris';


// Displays the options card
const Options = (props) => { // Receives the 'loadImages(params, single?)' function to call when the user requests to load images
    const [count, setCount] = useState(10);

    return (
        <Card
            title="Options"
            sectioned
            primaryFooterAction={{
                content: 'Load images',
                onAction: () => (props.loadImages({ count: count })),
            }}>
            <RangeSlider
                output
                label="Image count"
                min={1}
                max={20}
                value={count}
                onChange={(value) => (setCount(value))}
            />
        </Card>
    )
}

export default Options;

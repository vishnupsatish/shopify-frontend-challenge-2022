import React, { useState, useEffect, useRef } from 'react';
import { Layout, Card, RangeSlider } from '@shopify/polaris';

const Options = (props) => {
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

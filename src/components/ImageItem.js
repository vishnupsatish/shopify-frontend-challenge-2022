import React, { useState } from 'react';
import { MediaCard, Toast } from '@shopify/polaris';


// Displays a specific image
const ImageItem = (props) => { // Receives the picture of the day boject through props
    const [liked, setLiked] = useState(false);
    const [showShareToast, setShareToast] = useState(false);

    // Copy the current item's link to the clipboard
    const copyLink = () => {
        const shareURL = new URL(window.location.host);
        shareURL.searchParams.set('media', props.image.date);
        navigator.clipboard.writeText(shareURL);
        // Show the "link copied" toast
        setShareToast(true)
    }

    return (
        <React.Fragment>
            <MediaCard
                title={`${props.image.title} - ${props.image.date}`}
                primaryAction={!liked // If the media has not been liked, show the "Like" button
                    ? {
                        content: 'Like',
                        onAction: () => { setLiked(true) },
                    }
                    : { // Otherwise, show the "unlike"
                        content: 'Unlike',
                        onAction: () => { setLiked(false) },
                    }
                }
                secondaryAction={{ 
                    content: 'Share',
                    onAction: copyLink,
                }}
                description={props.image.explanation}
                portrait={true} >
                {props.image.media_type === 'image' // Depending on the type of media, show an image element or an iframe
                    ? (<img
                        alt={props.image.title}
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src={props.image.url}
                    />)
                    : (<iframe
                        src={props.image.url}
                        title={props.image.title}
                        width="100%"
                        height="100%"
                    />
                    )
                }
            </MediaCard>

            {showShareToast // Show the share toast
                ? <Toast content="Link copied" onDismiss={() => setShareToast(false)} />
                : null
            }

        </React.Fragment>
    );
}


export default ImageItem;

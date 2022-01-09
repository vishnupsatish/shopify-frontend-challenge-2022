import React, { useState } from 'react';
import { MediaCard, Toast } from '@shopify/polaris';


const ImageItem = (props) => { // Receives image URL, title, date, and description through props
    const [liked, setLiked] = useState(false);
    const [showShareToast, setShareToast] = useState(false);

    const copyLink = () => {
        const shareURL = new URL(window.location.host);
        shareURL.searchParams.set('image', props.image.date);
        navigator.clipboard.writeText(shareURL);
        setShareToast(true)
    }

    return (
        <React.Fragment>
            <MediaCard
                title={`${props.image.title} - ${props.image.date}`}
                primaryAction={!liked
                    ? {
                        content: 'Like',
                        onAction: () => { setLiked(true) },
                    }
                    : {
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
                {props.image.media_type === 'image'
                    ? (<img
                        alt={props.image.title}
                        width="100%"
                        height="100%"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        src={props.image.url} />)
                    : (<iframe
                        src={props.image.url}
                        title={props.image.title}
                        width="100%"
                        height="100%" />
                    )
                }

            </MediaCard>

            {showShareToast
                ? <Toast content="Link copied" onDismiss={() => setShareToast(false)} />
                : null
            }


        </React.Fragment>
    );
}


export default ImageItem;

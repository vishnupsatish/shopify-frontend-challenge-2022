import React from 'react';
import ReactDOM from 'react-dom';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Frame } from '@shopify/polaris';
import App from './App';


ReactDOM.render(
    <AppProvider i18n={enTranslations}>
        <Frame>
            <Page title="Space 4 Everyone!" subtitle="All media is from the NASA APOD API">
                <App />
            </Page>
        </Frame>
    </AppProvider>,
    document.getElementById('root'),
);
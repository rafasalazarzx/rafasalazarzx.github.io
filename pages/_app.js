import React from 'react';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    pageProps: PropTypes.object,
};

MyApp.defaultProps = {
    pageProps: {},
};

export default MyApp;

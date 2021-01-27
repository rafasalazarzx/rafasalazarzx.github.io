import React from 'react';
import PropTypes from 'prop-types';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    pageProps: PropTypes.object,
};

MyApp.defaultProps = {
    pageProps: {},
};

export default MyApp;

import Head from 'next/head';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MainContainer, Grid } from '../components';
import { globalStyles, lightTheme } from '../styles';

const GlobalStyles = createGlobalStyle`${globalStyles}`;

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>castro.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <MainContainer>
                    <Grid minHeight="80vh" width="80vw">
                        <div style={{ backgroundColor: 'red' }} />
                        <Grid columns="1fr">
                            <div style={{ backgroundColor: 'blue' }} />
                            <div style={{ backgroundColor: 'blue' }} />
                            <div style={{ backgroundColor: 'blue' }} />
                        </Grid>
                    </Grid>
                </MainContainer>
            </ThemeProvider>
        </>
    );
}

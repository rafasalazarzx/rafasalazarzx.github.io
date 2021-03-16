import Head from 'next/head';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MainContainer, Grid, JobRow, Header } from '../components';
import { jobs, schools } from '../data';
import { globalStyles, lightTheme } from '../styles';

const GlobalStyles = createGlobalStyle`${globalStyles}`;

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>castro.dev</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                  href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400&family=Open+Sans:wght@300;400&display=swap"
                  rel="stylesheet"
                />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <MainContainer>
                    <Grid>
                        <Header />
                        <Grid
                          columns="1fr"
                          tabletGap="2rem"
                          laptopGap="2.5rem"
                          desktopGap="3rem"
                        >
                            <h1>Work Experience</h1>
                            {jobs.map((job, index) => (
                                <JobRow
                                  key={`job-${job.companyName}`}
                                  first={index === 0}
                                  {...job}
                                />
                            ))}
                            <h1>Education</h1>
                            {schools.map((school, index) => (
                                <JobRow
                                  key={`school-${school.schoolName}`}
                                  first={index === 0}
                                  {...school}
                                />
                            ))}
                        </Grid>
                    </Grid>
                </MainContainer>
            </ThemeProvider>
        </>
    );
}

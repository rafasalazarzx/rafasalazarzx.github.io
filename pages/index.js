import Head from 'next/head';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MainContainer, Grid, JobRow } from '../components';
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
            </Head>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <MainContainer>
                    <Grid>
                        <div
                          style={{ backgroundColor: 'red', height: '200px' }}
                        />
                        <Grid columns="1fr">
                            <h1>Work Experience</h1>
                            {jobs.map((job, index) => (
                                <JobRow
                                  key={`job-${job.companyName}`}
                                  first={index === 0}
                                  {...job}
                                />
                            ))}
                            <br />
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

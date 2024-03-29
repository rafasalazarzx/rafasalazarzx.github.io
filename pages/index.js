import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { MainContainer, Grid, JobRow, Header } from '../components';
import { jobs, schools } from '../data';
import { GlobalStyles, lightTheme, darkTheme } from '../styles';

export default function Home() {
    const [useDarkTheme, setUseDarkTheme] = useState(false);

    useEffect(() => {
        if (!window.matchMedia) {
            return;
        }

        const isDarkModePreferred = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        setUseDarkTheme(isDarkModePreferred);

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                setUseDarkTheme(matches);
            });
    }, []);

    return (
        <>
            <Head>
                <title>castro.dev</title>
            </Head>
            <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
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

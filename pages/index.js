import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle``;
const MainContainer = styled.div`
  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-variant: small-caps;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <GlobalStyles />
        <h1>Hello world!</h1>
      </MainContainer>
    </>
  )
}

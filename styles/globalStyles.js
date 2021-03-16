import lightTheme from './lightTheme';
import print from './print';

const globalStyles = `
  html, body, * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${lightTheme.background};

    ${print} {
      background-color: white;

      @page {
        size: Letter;
      }
    }
  }

  h1, h2 {
    font-family: 'Montserrat Alternates', sans-serif;
  }

  h1 {
    font-weight: 400;
  }

  h2 {
    font-weight: 300;
  }

  h3, h4, h5 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
`;

export default globalStyles;

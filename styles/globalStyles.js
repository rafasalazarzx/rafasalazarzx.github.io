import lightTheme from './lightTheme';
import print from './print';

const globalStyles = `
html, body, * {
  box-sizing: border-box;
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
`;

export default globalStyles;

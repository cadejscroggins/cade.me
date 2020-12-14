import AuikApp from 'a-uik/c/AuikApp';
import React from 'react';
import seo from '../seo';
import theme from '../theme';

const App = ({ Component, pageProps }) => (
  <AuikApp seo={seo} theme={theme}>
    <Component {...pageProps} />
  </AuikApp>
);

export default App;

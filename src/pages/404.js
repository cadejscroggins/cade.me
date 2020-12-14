import Error from 'next/error';
import React from 'react';

const FourOhFourPage = () => <Error statusCode={404} title="Page not found" />;

export default FourOhFourPage;

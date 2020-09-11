import React from 'react';

import { Container } from './error.styles';

interface ErrorProps {
  errorMessage?: string | null;
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  console.log('@@Error/rendered');
  return <>{errorMessage && <Container>{errorMessage}</Container>}</>;
};

export default Error;

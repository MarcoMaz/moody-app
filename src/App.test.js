// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', async () => {
  render(<App />);
});

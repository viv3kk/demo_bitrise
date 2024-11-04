// __tests__/App.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Component', () => {
  it('renders the welcome text', () => {
    // Render the App component
    const { getByText } = render(<App />);
    
    // Check if "Hello, React Native!" text is in the document
    expect(getByText('Hello, React Native!')).toBeTruthy();
  });
});
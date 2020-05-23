import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

it('renders without crashing', () => {
    render(<Alert />);
  });
  
it('matches snapshot with danger messages', () => {
      const {asFragment} = render(<Alert type="danger" msgs={['oh no!', 'it broke!']}/>);
      expect(asFragment()).toMatchSnapshot();
  });
it('matches snapshot with warning messages', () => {
    const {asFragment} = render(<Alert type="warning" msgs={['caution!']}/>);
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot with success messages', () => {
    const {asFragment} = render(<Alert type="success" msgs={[]}/>);
    expect(asFragment()).toMatchSnapshot();
});
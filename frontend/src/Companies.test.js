import React from 'react';
import { render } from '@testing-library/react';
import Companies from './Companies';
import {UserProvider} from './testUtils';

it('renders without crashing', () => {
    render(
    // <UserProvider>
        <Companies />
    // </UserProvider>
    );
});
  
it('matches snapshot', () => {
      const {asFragment} = render(<Companies />);
    expect(asFragment()).toMatchSnapshot();
});

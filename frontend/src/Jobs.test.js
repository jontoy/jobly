import React from 'react';
import { render } from '@testing-library/react';
import Jobs from './Jobs';
import {UserProvider} from './testUtils';

it('renders without crashing', () => {
    render(
    <UserProvider>
        <Jobs />
    </UserProvider>
    );
});
  
it('matches snapshot when user is logged in', () => {
      const {asFragment} = render(
        <UserProvider>
            <Jobs />
        </UserProvider>
        );
    expect(asFragment()).toMatchSnapshot();
});
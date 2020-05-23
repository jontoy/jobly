import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import {UserProvider} from './testUtils';

it('renders without crashing', () => {
    render(
        <UserProvider>
            <Home />
        </UserProvider>
    );
});
  
it('matches snapshot when user is logged in', () => {
      const {asFragment} = render(
            <UserProvider>
                <Home />
            </UserProvider>
        );
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when user is logged out', () => {
    const {asFragment} = render(
          <UserProvider currentUser={null}>
              <Home />
          </UserProvider>
      );
  expect(asFragment()).toMatchSnapshot();
});
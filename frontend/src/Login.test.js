import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import {UserProvider} from './testUtils';

it('renders without crashing', () => {
    render(
    <MemoryRouter>
        <UserProvider>
            <Login />
        </UserProvider>
    </MemoryRouter>
    );
});
  
it('matches snapshot when user is logged in', () => {
      const {asFragment} = render(
        <MemoryRouter>
            <UserProvider>
                <Login />
            </UserProvider>
        </MemoryRouter>
        );
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when user is logged out', () => {
    const {asFragment} = render(
      <MemoryRouter>
          <UserProvider currentUser={null}>
              <Login />
          </UserProvider>
      </MemoryRouter>
      );
  expect(asFragment()).toMatchSnapshot();
});
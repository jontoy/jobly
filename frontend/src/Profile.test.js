import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';
import { MemoryRouter } from 'react-router-dom';
import {UserProvider} from './testUtils';

it('renders without crashing', () => {
    render(
    <MemoryRouter>
        <UserProvider>
            <Profile />
        </UserProvider>
    </MemoryRouter>
    );
});
  
it('matches snapshot when user is logged in', () => {
      const {asFragment} = render(
        <MemoryRouter>
            <UserProvider>
                <Profile />
            </UserProvider>
        </MemoryRouter>
        );
    expect(asFragment()).toMatchSnapshot();
});
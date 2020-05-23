import React from 'react';
import { render } from '@testing-library/react';
import Applications from './Applications';
import {UserProvider} from './testUtils';


it('renders without crashing', () => {
    render(
    <UserProvider>
        <Applications/>
    </UserProvider>
    );
});
  
it('matches snapshot', () => {
      const {asFragment} = render(
      <UserProvider>
        <Applications/>
      </UserProvider>);
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when user has existing applications', () => {
    const currentUser = {username:'test user', jobs:[{id:1, title:'fake job'}]}
    const {asFragment} = render(
    <UserProvider appliedIds={[1]} currentUser={currentUser}>
        <Applications/>
    </UserProvider>
    );
  expect(asFragment()).toMatchSnapshot();
});


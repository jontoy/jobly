import React from 'react';
import { render } from '@testing-library/react';
import JobCard from './JobCard';
import {UserProvider} from './testUtils';

it('renders without crashing', () => {
    render(
    <UserProvider>
        <JobCard/>
    </UserProvider>
    );
});
  
it('matches snapshot', () => {
      const {asFragment} = render(
      <UserProvider>
        <JobCard/>
      </UserProvider>);
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when user has not applied to job', () => {
    const {asFragment} = render(
    <UserProvider>
        <JobCard id={1} title="fake job" salary={140000} equity={0.01}/>
    </UserProvider>
    );
  expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when user has applied to job', () => {
    const {asFragment} = render(
    <UserProvider appliedIds={[1]}>
        <JobCard id={1} title="fake job" salary={140000} equity={0.01}/>
    </UserProvider>
    );
  expect(asFragment()).toMatchSnapshot();
});
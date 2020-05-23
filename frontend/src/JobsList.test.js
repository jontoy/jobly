import React from 'react';
import { render } from '@testing-library/react';
import JobsList from './JobsList';
import {UserProvider} from './testUtils';

it('renders without crashing', () => {
    render(<JobsList jobs={[]} />);
});
  
it('matches snapshot', () => {
      const {asFragment} = render(<JobsList jobs={[]}/>);
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot with jobs data', () => {
    const jobs = [{id:1, title:'fake job', salary:140000, equity:0.01}]
    const {asFragment} = render(
    <UserProvider>
    <JobsList jobs={jobs}/>
    </UserProvider>
    );
  expect(asFragment()).toMatchSnapshot();
});


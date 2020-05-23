import React from 'react';
import { render } from '@testing-library/react';
import CompanyCard from './CompanyCard';

it('renders without crashing', () => {
    render(<CompanyCard />);
});
  
it('matches snapshot', () => {
      const {asFragment} = render(<CompanyCard/>);
    expect(asFragment()).toMatchSnapshot();
});
import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

it('renders without crashing', () => {
    render(<Pagination />);
});
  
it('matches snapshot when user is logged in', () => {
      const {asFragment} = render(<Pagination />);
    expect(asFragment()).toMatchSnapshot();
});

import React from 'react';
import { render } from '@testing-library/react';
import CompanyList from './CompanyList';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    render(<CompanyList companies={[]} />);
});
  
it('matches snapshot', () => {
      const {asFragment} = render(
      <MemoryRouter>
        <CompanyList companies={[]}/>
      </MemoryRouter>
      );
    expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot with jobs data', () => {
    const companies = [
        {handle:'company-one', description:'test1', name:'Company One'},
        {handle:'company-two', description:'test2', name:'Company Two', logo_url:'https://image.flaticon.com/icons/svg/25/25447.svg'}]
    const {asFragment} = render(
        <MemoryRouter>
         <CompanyList companies={companies}/>
        </MemoryRouter>
      );
    expect(asFragment()).toMatchSnapshot();
});


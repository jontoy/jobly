import React from 'react';
import { render } from '@testing-library/react';
import SelectField from './SelectField';


it('renders without crashing', () => {
  render(<SelectField />);
});

it('matches snapshot', () => {
    const {asFragment} = render(<SelectField />);
    expect(asFragment()).toMatchSnapshot();
});
  
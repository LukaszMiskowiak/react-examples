import React from 'react';
import { render } from '@testing-library/react';
import StateContextContainer from './state-context';

test('user name equals Marian', () => {
    const { getByText } = render(<StateContextContainer />);

    const greetingsValue = getByText('Yo, Marian!');
    expect(greetingsValue).toBeInTheDocument();
});

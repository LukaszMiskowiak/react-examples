import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './counter';

test('increments counter when button is clicked', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText('increment'));
    const counterValue = getByText('1');
    expect(counterValue).toBeInTheDocument();
});

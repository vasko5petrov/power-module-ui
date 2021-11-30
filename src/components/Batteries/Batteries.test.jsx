import React from 'react';
import { render, screen } from '@testing-library/react';
import Battery from 'components/Batteries/Battery';

const battery = {
	label: 'Battery Test',
	value: 10
};

describe("<Batteries />", () => {
	test('Renders Battery component with correct value', () => {
		render(<Battery id="battery-test" battery={battery} />);
		const element = screen.getByTestId('battery-test-value');
		expect(element).toHaveTextContent(10);
	});
});
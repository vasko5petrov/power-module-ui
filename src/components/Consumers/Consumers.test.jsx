import React from 'react';
import { render, screen } from '@testing-library/react';
import Consumer from 'components/Consumers/Consumer';

const consumer = {
	label: 'Consumer Test',
	value: 2
};

describe("<Consumers />", () => {
    test('Renders Consumer component with correct value', () => {
        render( <Consumer id="consumer-test" consumer={consumer} />);
        const element = screen.getByTestId('consumer-test-value');
        expect(element).toHaveTextContent(2);
    });
});
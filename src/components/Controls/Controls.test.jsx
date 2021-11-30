import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Controls from "components/Controls";
import Consumers from "components/Consumers";
import { ConsumersDataProvider } from "contexts/ConsumersDataProvider";
import { NotificationsProvider } from "contexts/NotificationsProvider";

describe("<Controls />", () => {

    test('Button displays text', () => {
        render(
            <NotificationsProvider>
                <ConsumersDataProvider>
                    <Controls />
                </ConsumersDataProvider>
            </NotificationsProvider>
        );

        expect(screen.getByTestId("consumer_1-button")).toHaveTextContent("Disconnect Consumer 1");
    });

    test('Button changes text on click', () => {
        render(
            <NotificationsProvider>
                <ConsumersDataProvider>
                    <Controls />
                </ConsumersDataProvider>
            </NotificationsProvider>
        );

        const button = screen.getByTestId("consumer_1-button");
        fireEvent.click(button);

        expect(button).toHaveTextContent("Connect Consumer 1");
    });

    test('Button changes consumer state', async () => {
        render(
            <NotificationsProvider>
                <ConsumersDataProvider>
                    <Consumers />
                    <Controls />
                </ConsumersDataProvider>
            </NotificationsProvider>
        );

        const button = screen.getByTestId("consumer_1-button");
        fireEvent.click(button);
    
        await waitFor(() => screen.getByText("0.00"));
        expect(screen.getByText("0.00")).toBeInTheDocument();
    });
});

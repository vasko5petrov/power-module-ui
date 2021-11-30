import React from 'react';
import { BatteriesDataProvider } from 'contexts/BatteriesDataProvider';
import { ConsumersDataProvider } from 'contexts/ConsumersDataProvider';
import { NotificationsProvider } from 'contexts/NotificationsProvider';
import Batteries from 'components/Batteries';
import Consumers from 'components/Consumers';
import Controls from 'components/Controls';

const Dashboard = () => (
    <>
        <NotificationsProvider>
            <BatteriesDataProvider>
                <Batteries />
            </BatteriesDataProvider>
            <ConsumersDataProvider>
                <Consumers />
                <Controls />
            </ConsumersDataProvider>
        </NotificationsProvider>
    </>
);

export default Dashboard;

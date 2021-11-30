import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Batteries from 'components/Batteries';
import Consumers from 'components/Consumers';
import Controls from 'components/Controls';
import NotificationProvider from 'components/Notifications/NotificationProvider';
import * as batteryActions from 'store/actions/batteries';
import * as consumerActions from 'store/actions/consumers';

const Dashboard = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(batteryActions.fetchBatteries());
            dispatch(consumerActions.fetchConsumers());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [dispatch]);

    return (
        <div>
            <NotificationProvider>
                <Batteries />
                <Consumers />
                <Controls />
            </NotificationProvider>
        </div>
    )
}

export default Dashboard;

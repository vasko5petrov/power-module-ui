import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import style from './styles/Notifications.module.scss';

const NotificationsContext = React.createContext();

export const useNotifications = () => {
    return useContext(NotificationsContext);
};

export const NotificationsProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (notification) => {
        setNotifications((prevNotificationsState) => [...prevNotificationsState, notification]);
    };

    const removeNotification = (id) => {
        setNotifications((prevNotificationsState) => [...prevNotificationsState.filter((n) => n.id !== id)]);
    };

    const notficationStyles = (type) => classnames(style.notificationItem,
        {
            [style.battery]: type === 'BATTERY',
            [style.consumer]: type === 'CONSUMER'
        }
    );

    return (
        <NotificationsContext.Provider value={{notifications, addNotification, removeNotification}}>
            {notifications.length > 0 &&
                <div className={style.container}>
                    {Object.entries(notifications).map(([_, notification]) => (
                        <div className={notficationStyles(notification.type)} key={notification.id}>
                            <p>{notification.message}</p>
                        </div>
                    ))}
                </div>
            }
            {children}
        </NotificationsContext.Provider>
    )
}

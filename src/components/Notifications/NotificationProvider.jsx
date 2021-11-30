import React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import style from './styles/Notifications.module.scss';

const NotificationProvider = ({ children }) => {
    const notifications = useSelector(store => store.ui.get('notifications'));

    if (notifications.size === 0) {
        return children;
    }

    const notficationStyles = (type) => classnames(style.notificationItem,
        {
            [style.battery]: type === 'BATTERY',
            [style.consumer]: type === 'CONSUMER'
        }
    );

    return (
        <div>
            <div className={style.container}>
                {notifications.map((notification) => (
                    <div className={notficationStyles(notification.get('type'))} key={notification.get('id')}>
                        <p>{notification.get('message')}</p>
                    </div>
                )).toList()}
            </div>
            {children}
        </div>
    )
};
    
export default NotificationProvider;

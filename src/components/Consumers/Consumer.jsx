import React, { useEffect } from 'react';
import classnames from 'classnames';
import formatNumber from "utils/formatNumber";
import { useNotifications } from 'contexts/NotificationsProvider';
import { CONSUMER_THRESHOLD } from 'utils/enums';
import style from './styles/Consumer.module.scss';

const Consumer = ({consumer, id}) => {
    const { notifications, addNotification, removeNotification } = useNotifications();
    const itemStyles = classnames(style.container, {[style.warning]: consumer.value > CONSUMER_THRESHOLD});

    useEffect(() => {
        const alreadyNotified = notifications.some((notification) => notification.id === id);
        if (consumer.value > CONSUMER_THRESHOLD && !alreadyNotified) {
            addNotification({
                id,
                type: 'CONSUMER',
                message: `${consumer.label} - High Consumption!`
            });
        }
        if (consumer.value <= CONSUMER_THRESHOLD && alreadyNotified) {
            removeNotification(id);
        }
    }, [consumer, id, notifications, addNotification, removeNotification]);

    return (
        <div className={itemStyles}>
            <p>{consumer.label}</p>
            {formatNumber(consumer.value)} A
        </div>
    )
}

export default Consumer;

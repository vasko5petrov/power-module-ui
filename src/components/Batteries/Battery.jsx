import React, { useEffect } from 'react';
import classnames from 'classnames';
import formatNumber from "utils/formatNumber";
import { useNotifications } from 'contexts/NotificationsProvider';
import { BATTERY_THRESHOLD } from 'utils/enums';
import style from './styles/Battery.module.scss';

const Battery = ({battery, id}) => {
    const { notifications, addNotification, removeNotification } = useNotifications();
    const itemStyles = classnames(style.container, {[style.warning]: battery.value < BATTERY_THRESHOLD});

    useEffect(() => {
        const alreadyNotified = notifications.some((notification) => notification.id === id);
        if (battery.value < BATTERY_THRESHOLD && !alreadyNotified) {
            addNotification({
                id,
                type: 'BATTERY',
                message: `${battery.label} - Low Voltage!`
            });
        }
        if (battery.value > BATTERY_THRESHOLD && alreadyNotified) {
            removeNotification(id);
        }
    }, [battery, id, notifications, addNotification, removeNotification ]);

    return (
        <div className={itemStyles}>
            <p>{battery.label}</p>
            {formatNumber(battery.value)} V
        </div>
    )
}

export default Battery;

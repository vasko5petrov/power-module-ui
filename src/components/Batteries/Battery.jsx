import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import formatNumber from "utils/formatNumber";
import { BATTERY_THRESHOLD } from 'utils/enums';
import * as uiActions from 'store/actions/ui';
import style from './styles/Battery.module.scss';

const Battery = ({battery, id}) => {
    const dispatch = useDispatch();
    const notifications = useSelector((store) => store.ui.get('notifications'));

    useEffect(() => {
        const alreadyNotified = notifications.some((notification) => notification.get('id') === id);
        if (battery.get('value') < BATTERY_THRESHOLD && !alreadyNotified) {
            dispatch(uiActions.addNotification({
                id,
                type: 'BATTERY',
                message: `${battery.get('label')} - Low Voltage!`
            }));
        }
        if (battery.get('value') > BATTERY_THRESHOLD && alreadyNotified) {
            dispatch(uiActions.removeNotification(id));
        }
    }, [battery, dispatch, notifications, id]);

    const itemStyles = classnames(style.container, {[style.warning]: battery.get('value') < BATTERY_THRESHOLD})

    return (
        <div className={itemStyles}>
            <p>{battery.get('label')}</p>
            {formatNumber(battery.get('value'))} V
        </div>
    )
}

export default Battery;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import formatNumber from "utils/formatNumber";
import { CONSUMER_THRESHOLD } from 'utils/enums';
import * as uiActions from 'store/actions/ui';
import style from './styles/Consumer.module.scss';

const Consumer = ({id, consumer}) => {
    const dispatch = useDispatch();
    const notifications = useSelector((store) => store.ui.get('notifications'));

    useEffect(() => {
        const alreadyNotified = notifications.some((notification) => notification.get('id') === id);
        if (consumer.get('value') > CONSUMER_THRESHOLD && !alreadyNotified) {
            dispatch(uiActions.addNotification({
                id,
                type: 'CONSUMER',
                message: `${consumer.get('label')} - High Consumption!`
            }));
        }
        if (consumer.get('value') < CONSUMER_THRESHOLD && alreadyNotified) {
            dispatch(uiActions.removeNotification(id));
        }
    }, [consumer, dispatch, notifications, id]);

    const itemStyles = classnames(style.container, {[style.warning]: consumer.get('value') > CONSUMER_THRESHOLD})

    return (
        <div className={itemStyles}>
            <p>{consumer.get('label')}</p>
            {formatNumber(consumer.get('value'))} A
        </div>
    )
}

export default Consumer

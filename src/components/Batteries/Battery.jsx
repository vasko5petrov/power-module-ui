import React from 'react';
import classnames from 'classnames';
import formatNumber from "utils/formatNumber";
import { BATTERY_THRESHOLD } from 'utils/enums';
import style from './styles/Battery.module.scss';

const Battery = ({battery, id}) => {
    const itemStyles = classnames(style.container, {[style.warning]: battery.value < BATTERY_THRESHOLD});

    return (
        <div className={itemStyles}>
            <p>{battery.label}</p>
            <div>
                <span data-testid={`${id}-value`}>{formatNumber(battery.value)}</span> V
            </div>
        </div>
    )
}

export default Battery;

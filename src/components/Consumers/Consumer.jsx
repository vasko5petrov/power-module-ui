import React from 'react';
import classnames from 'classnames';
import formatNumber from "utils/formatNumber";
import { CONSUMER_THRESHOLD } from 'utils/enums';
import style from './styles/Consumer.module.scss';

const Consumer = ({consumer, id}) => {
    const itemStyles = classnames(style.container, {[style.warning]: consumer.value > CONSUMER_THRESHOLD});

    return (
        <div className={itemStyles}>
            <p>{consumer.label}</p>
            <div>
                <span data-testid={`${id}-value`}>{formatNumber(consumer.value)}</span> A
            </div>
        </div>
    )
}

export default Consumer;

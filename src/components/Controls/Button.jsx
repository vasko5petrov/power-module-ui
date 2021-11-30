import React from 'react';
import classnames from 'classnames';
import style from './styles/Button.module.scss';

const Button = ({consumer, id, consumerSimulation, handleOnClick}) => {
    const toggleConsumerAndSimulation = () => {
        if (consumer.disconnected) {
            consumerSimulation.start();
        } else {
            consumerSimulation.clear();
        }
        handleOnClick(id);
    }

    const labelPrefix = consumer.disconnected ? 'Connect' : 'Disconnect';

    return (
        <button
            onClick={toggleConsumerAndSimulation}
            className={classnames(style.button, {
                [style.disconnect]: !consumer.disconnected,
                [style.connect]: consumer.disconnected
            })}
            data-testid={`${id}-button`}
        >{`${labelPrefix} ${consumer.label}`} </button>
    );
}

export default Button;

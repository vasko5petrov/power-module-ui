import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import * as consumerActions from 'store/actions/consumers';
import style from './styles/Button.module.scss';

const Button = ({consumer, id, consumerSimulation}) => {
    const dispatch = useDispatch();
	const { toggleConsumer } = bindActionCreators(consumerActions, dispatch);

    const toggleConsumerAndSimulation = () => {
        if (consumer.get('disconnected')) {
            consumerSimulation.start();
        } else {
            consumerSimulation.clear();
        }
        toggleConsumer(id)
    }

    return (
        <button onClick={toggleConsumerAndSimulation} className={classnames(style.button, {
            [style.disconnect]: !consumer.get('disconnected'),
            [style.connect]: consumer.get('disconnected')
        })}>
            {consumer.get('disconnected')
                ? `Connect ${consumer.get('label')}`
                : `Disconnect ${consumer.get('label')}`
            }
        </button>
    );
}

export default Button;

import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'components/Controls/Button';
import { Consumer1, Consumer2 } from 'utils/powerModuleDataGeneration';
import style from './styles/Controls.module.scss';

const Controls = () => {
    const consumers = useSelector((store) => store.consumers);

    const consumerSimulations = {
        'consumer_1': Consumer1,
        'consumer_2': Consumer2
    }

    return (
        <div className={style.container}>
            {consumers.map((consumer, key) => (
                <Button key={key} id={key} consumer={consumer} consumerSimulation={consumerSimulations[key]} />
            )).toList()}
        </div>
    )
}

export default Controls;

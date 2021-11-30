import React from 'react';
import Button from 'components/Controls/Button';
import { Consumer1, Consumer2 } from 'utils/powerModuleDataGeneration';
import { useConsumersData } from 'contexts/ConsumersDataProvider';
import style from './styles/Controls.module.scss';

const Controls = () => {
    const { consumers, toggleConsumer } = useConsumersData();

    const consumerSimulations = {
        'consumer_1': Consumer1,
        'consumer_2': Consumer2
    }

    if (!consumers) {
        return null;
    }
    
    return (
        <div className={style.container}>
            {Object.entries(consumers).map(([key, consumer]) => (
                <Button
                    key={key}
                    id={key}
                    consumer={consumer}
                    consumerSimulation={consumerSimulations[key]}
                    handleOnClick={toggleConsumer}
                />
            ))}
        </div>
    )
}

export default Controls;

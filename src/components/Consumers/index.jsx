import React from 'react';
import Consumer from 'components/Consumers/Consumer';
import { useConsumersData } from 'contexts/ConsumersDataProvider';
import style from './styles/Consumers.module.scss';

const Batteries = () => {
    const { consumers } = useConsumersData();

    if (!consumers) {
        return null;
    }

    return (
        <div className={style.container}>
            <h3>Consumers</h3>
            <div className={style.containerFlex}>
                {Object.entries(consumers).map(([key, consumer]) => (
                    <Consumer key={key} id={key} consumer={consumer} />
                ))}
            </div>
        </div>
    )
}

export default Batteries;
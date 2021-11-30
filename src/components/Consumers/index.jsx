import React from 'react';
import { useSelector } from 'react-redux';
import Consumer from 'components/Consumers/Consumer';
import style from './styles/Consumers.module.scss';

const Consumers = () => {
    const consumers = useSelector((store) => store.consumers);

    return (
        <div className={style.container}>
            <h3>Consumers</h3>
            <div className={style.containerFlex}>
                {consumers.size > 0 && consumers.map((consumer, key) => (
                    <Consumer key={key} id={key} consumer={consumer} />
                )).toList()}
            </div>
        </div>
    )
}

export default Consumers;

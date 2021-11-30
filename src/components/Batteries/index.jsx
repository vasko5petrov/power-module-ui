import React from 'react';
import { useSelector } from 'react-redux';
import Battery from 'components/Batteries/Battery';
import style from './styles/Batteries.module.scss';

const Batteries = () => {
    const batteries = useSelector((store) => store.batteries);
    return (
        <div className={style.container}>
            <h3>Batteries</h3>
            <div className={style.containerFlex}>
                {batteries.map((battery, key) => (
                    <Battery key={key} id={key} battery={battery} />
                )).toList()}
            </div>
        </div>
    )
}

export default Batteries;
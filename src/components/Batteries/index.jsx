import React from 'react';
import Battery from 'components/Batteries/Battery';
import { useBatteriesData } from 'contexts/BatteriesDataProvider';
import style from './styles/Batteries.module.scss';

const Batteries = () => {
    const { batteries } = useBatteriesData();

    if (!batteries) {
        return null;
    }

    return (
        <div className={style.container}>
            <h3>Batteries</h3>
            <div className={style.containerFlex}>
                {Object.entries(batteries).map(([key, battery]) => (
                    <Battery key={key} id={key} battery={battery} />
                ))}
            </div>
        </div>
    )
}

export default Batteries;
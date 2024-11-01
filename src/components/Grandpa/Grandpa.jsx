import { createContext, useState } from 'react';
import Aunte from '../Aunte/Aunte';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


export const AssetContext = createContext('gold');
export const MoneyContext = createContext(10000)

const Grandpa = () => {
    const [money, setMoney] = useState(10000)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Balance : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={'Diamond'}>
                    <section className='flex gap-4'>
                        <Dad></Dad>
                        <Uncle></Uncle>
                        <Aunte></Aunte>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;
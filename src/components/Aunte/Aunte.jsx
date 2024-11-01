import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunte = () => {
    return (
        <div>
            <h2>Aunte</h2>
            <section className='flex'>
                <Cousin name={'kabila'}></Cousin>
                <Cousin name={'sohana'}></Cousin>
            </section>
        </div>
    );
};

export default Aunte;
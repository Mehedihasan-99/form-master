
import Myself from '../Myself/Myself';
import Brother from '../Brother/brother';
import Sister from '../Sister/Sister';

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;
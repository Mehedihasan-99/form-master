import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>Balance : {money}</p>
            <section className="flex">
                <Cousin name={'rafshan'}></Cousin>
                <Cousin name={'sonia'}></Cousin>
            </section>
            <button className="bg-blue-200 mt-4" onClick={() => setMoney(money + 1000)}>Add Money</button>
        </div>
    );
};

export default Uncle;
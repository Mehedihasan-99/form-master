import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = () => {
    const ring = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p> ring :  {ring}</p>
        </div>
    );
};

export default Special;
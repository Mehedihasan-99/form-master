import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Sister = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Sister</h2>
            <p>gift: {gift}</p>
        </div>
    );
};

export default Sister;
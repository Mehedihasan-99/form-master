import { useInputState } from "../../Hooks/useInputState";

const HookForm2 = () => {
    const emailState = useInputState('hasu@modi.com')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( 'name', emailState.value)
    } 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Hook Form--2</h2>
                <input {...emailState} type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="number" />
                <br />
                <input type="submit" value="Submit" />
                {/* <button onClick={handleSubmit}>Submit</button> */}
            </form>
        </div>
    );
};

export default HookForm2;
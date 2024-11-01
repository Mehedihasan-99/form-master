import { useInputState } from "../../Hooks/useInputState";

const HookForm1 = () => {

    const [name, handleNameChange] = useInputState("mehedi");
    const [email, handleEmailChange] = useInputState("example@gmail.com");
    const [password, handlePasswordChange] = useInputState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form data', name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input value={email} onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input value={password} onChange={handlePasswordChange} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
                {/* <button onClick={handleSubmit}>Submit</button> */}
            </form>
        </div>
    );
};

export default HookForm1;
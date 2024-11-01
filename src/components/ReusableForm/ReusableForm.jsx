
const ReusableForm = ({formTitle, handleSubmit, submitBtnText}) => {

    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            <h2 className="text-4xl font-bold bg-blue-100 p-4 rounded-xl mb-3">{formTitle}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
                {/* <button onClick={handleSubmit}>Submit</button> */}
            </form>
        </div>
    );
};

export default ReusableForm;
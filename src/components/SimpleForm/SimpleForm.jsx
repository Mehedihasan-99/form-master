
const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
        console.log('submit done');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
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

export default SimpleForm;
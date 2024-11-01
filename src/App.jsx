import './App.css'
import HookForm1 from './components/HookForm/HookForm1'
import HookForm2 from './components/HookForm/HookForm2'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

  const handleSignUpSubmit = (data) => {
    console.log('sign up', data)
  }
  const handleUpdateSubmit = (data) => {
    console.log('Update', data)
  }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm1></HookForm1> */}
      {/* <HookForm2></HookForm2> */}
      <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>

      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateSubmit}>
      </ReusableForm>
    </>
  )
}

export default App

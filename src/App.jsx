import { useState } from 'react'
import './App.css'
import CustomForm from './components/ui/customForm/CustomForm'
import CustomInput from './components/ui/customInput/CustomInput'
import CustomFormikForm from './components/ui/customformikForm/CustomFormikForm'

function App() {
  const [obj, setObj] = useState({})

  return (
    <div className="App">
       <CustomForm
          title="mon nouveau formulaire"
          footer="footer du formulaire"
       >
          <CustomInput
          />
          <CustomInput
             defaultValue="value" 
          />
          <CustomInput/>
          <CustomInput/>
          <CustomInput/>
       </CustomForm>


       {/* demo avec les formulaires formik */}
       <CustomFormikForm/>
    </div>
  )
}

export default App

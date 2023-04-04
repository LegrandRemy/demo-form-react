import { useEffect, useState } from 'react'
import './App.css'
import CustomForm from './components/ui/customForm/CustomForm'
import CustomInput from './components/ui/customInput/CustomInput'
import CustomFormikForm from './components/ui/customformikForm/CustomFormikForm'

const defaultFormData = {
   titre: "",
   metier: "",
   dureeContrat: ""
}


function App() {
  const [formData, setFormData] = useState(defaultFormData)
  const [formError, setFormError] = useState({})

  const handleChangeDuree = (e) => {
      const dureeContrat = e.currentTarget.value
      setFormData(data => ({...data, dureeContrat}))
  }

  const handleChangeMetier = (e) => {
      const metier = e.currentTarget.value
      setFormData(data => ({...data, metier}))
  }
  const handleChangeTitle = (e) => {
      const titre = e.currentTarget.value
      setFormData(data => ({...data, titre}))
  }

  useEffect( () => {
      console.log("formError", formError)
  }, [formError])

  /**
  * 
  * @returns {object} form errors
  */ 
  const verifyForm = () => {
       const titre = formData.titre.length == ""
       const metier = formData.metier.length == 0
       const dureeContrat = formData.dureeContrat == ""
       return {titre, metier, dureeContrat}
  }

  const handleSubmit = (e) => {
      let errors = verifyForm()

      e.preventDefault()
      setFormError(errors)
      console.log("formData", formData)
  }


  return (
    <div className="App">

       {/* demo avec un formulaire classic */}
       <CustomForm
          title="mon nouveau formulaire"
          footer="footer du formulaire"
       >
          <CustomInput
               name="titre"
               onChange={handleChangeTitle}
          />
          { formError.titre &&<span>ce champ est invalide</span>}
          <CustomInput
               name="metier"
               onChange={handleChangeMetier}
          />
          { formError.metier &&<span>ce champ est invalide</span>}
          <CustomInput
               name="dureeContrat"
               onChange={handleChangeDuree}
          />
          { formError.dureeContrat &&<span>ce champ est invalide</span>}

         <button
            style={{margin:2}}
            type="submit"
            onClick={handleSubmit}
          >
            valider
          </button>
       </CustomForm>


       {/* demo avec les formulaires formik */}
       {/*<CustomFormikForm/>*/} 
    </div>
  )
}

export default App

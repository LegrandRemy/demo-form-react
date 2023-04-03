import { Field } from 'formik'
import React from 'react'

/**
 * custom input pour les formulaires formik 

 * @param {object} props 
 * @param {string} props.label
 * @param {string} props.fieldName
 * @param {FieldAttributes<any>} props.fieldProps
 * @returns 
 */
const CustomFormikInput = (props) => {
    const {label, fieldName, ...fieldProps} = props
  return (
    <>
        { label && <label htmlFor="firstName">{label}</label> }
        <Field id={fieldName} name={fieldName} {...fieldProps} />
    </>
  )
}

export default CustomFormikInput
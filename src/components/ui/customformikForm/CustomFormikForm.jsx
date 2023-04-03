import { Field, Form, Formik } from "formik";
import CustomFormikInput from "../customFormikInput/CustomFormikInput";
const CustomFormikForm = (props) => {
  return (
    <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                toto: '',
                email: '',
            }}
            onSubmit={async (values) => {
                // fake call to a endpoint...
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            >
            <Form>
                <CustomFormikInput
                    label="toto"
                    fieldName="toto"
                    placeholder="jane@acme.com"
                    type="email"
                />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CustomFormikForm
import { useSelector, useDispatch } from "react-redux"
import { Formik, Form, Field } from "formik"
import { nanoid } from "@reduxjs/toolkit"
import { addInfo } from "Redux/infoSlice"
import * as yup from 'yup'

export const InfoForm = () => {
    const initialValues = {
        fullName: '',
        activities: '',
    }

    const states = useSelector(state => state.addItems.infos.map(info => {
        return (
            <div key={info.id}>
                <span>{info.fullName}</span>
                <span>{info.activities}</span>
            </div>
        )
        

    }))
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const newContact = {
            id: nanoid(),
            ...values,
        }
        dispatch(addInfo(newContact))
    }

    const schema = yup.object({
    fullName: yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('This field is required'),
    
    activities: yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('This field is required'),

  });


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema = {schema}
        >
            <Form> 
            <label>
                FullName
                    <Field
                        type='text'
                        name="fullName"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
            </label>
            <label>
                Activities
                    <Field
                        type='text'
                        name="activities"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
            </label>
            <button type="submit"> SUBMIT</button>
            <div>{states }</div>
        </Form>
        </Formik>

    )
}

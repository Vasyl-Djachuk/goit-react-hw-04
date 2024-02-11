import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'number format is incorrect')
    .required('Required'),
});

export const ContactForm = ({ handleSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const nameId = useId();
  const telId = useId();

  const handleMaskChange = e => {
    if (e.target.name !== `number`) return;
    const number = e.target.value.replace(/\D/g, ``);
    let corected = number.slice(0, 3);
    if (number.length > 3) corected += `-` + number.slice(3, 5);
    if (number.length > 5) corected += `-` + number.slice(5, 7);
    e.target.value = corected;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>

        <div className={css.wrapper}>
          <label htmlFor={telId}>Number</label>
          <Field
            className={css.input}
            onInput={handleMaskChange}
            type="text"
            name="number"
            id={telId}
          ></Field>
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  text: "",
};

function TodoForm({ onSubmit }) {
  const validate = ({ text }) => {
    const errors = {};

    if (!text) {
      errors.text = "Обов'язкове поле";
    } else if (text.length < 5) {
      errors.text = "Має бути не менше 5 символів";
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        className="form js--form"
      >
        <Form>
          <h1>Todo</h1>
          <Field
            type="text"
            id="text"
            name="text"
            className="form__input js--form__input"
          />
          <ErrorMessage name="text" component="div" />
          <button type="submit" className="form__btn">
            Додати
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default TodoForm;

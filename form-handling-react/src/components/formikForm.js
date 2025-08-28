import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik form submitted:", values);
    alert(`User ${values.username} registered successfully!`);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>

        <div className="mb-3">
          <label className="block font-medium">Username</label>
          <Field name="username" type="text" className="w-full p-2 border rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-3">
          <label className="block font-medium">Email</label>
          <Field name="email" type="email" className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-3">
          <label className="block font-medium">Password</label>
          <Field name="password" type="password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;

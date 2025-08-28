import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-6">
      {/* Controlled form */}
      <RegistrationForm />

      {/* Divider */}
      <hr className="my-10" />

      {/* Formik form */}
      <FormikForm />
    </div>
  );
}

export default App;

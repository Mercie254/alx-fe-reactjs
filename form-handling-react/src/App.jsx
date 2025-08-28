import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";


function App() {
  return (
    <div className="p-6">
      {/* Controlled form */}
      <RegistrationForm />

      {/* Divider */}
      <hr className="my-10" />

      {/* Formik form */}
      <formikForm />
    </div>
  );
}

export default App;

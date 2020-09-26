import React from "react";
import ReactDOM from "react-dom";
import { useSharedForm } from "react-hook-form-shareable";

import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import "./styles.css";
let countExtra = 0;
let countExtra1 = 0;
let counRegister = 0;

function DetailsNested() {
  const form = useSharedForm("Register");
  const { register, errors } = form;

  console.log("DetailsNested", countExtra++, errors);
  return (
    <>
      <label>Company</label>
      <input name="company" ref={register} />
      {errors.company && <p>{errors.company.message}</p>}
      <label>Email</label>
      <input name="email" ref={register} />
      {errors.email && <p>{errors.email.message}</p>}
    </>
  );
}

function DetailsOutside() {
  const { register, errors } = useSharedForm("Register");

  console.log("DetailsOutside", countExtra1++);
  return (
    <>
      <form>
        <label>Notes</label>
        <input name="notes" ref={register} />
        {errors.notes && <p>{errors.notes.message}</p>}
      </form>
    </>
  );
}

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
});

function Register({ children }) {
  const { register, handleSubmit, errors } = useSharedForm("Register", {
    defaultValues: { example: "", exampleRequired: "" },
    errors: {},
    mode: "all",
    resolver: yupResolver(schema),
  });
  // const example1 = watch("example1");
  // const example1 = useWatch({ control, name: "example" });
  // const example1 = watch("example");
  // trigger();
  // console.log(JSON.stringify(errors));
  console.log("Register", counRegister++);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input name="first_name" ref={register} />
        {errors.first_name && <p>{errors.first_name.message}</p>}
        <label>Last Name</label>
        <input name="last_name" ref={register} />
        {errors.last_name && <p>{errors.last_name.message}</p>}

        {children}
        <input type="submit" />
      </form>
    </>
  );
}

function App() {
  console.log("App");

  return (
    <>
      <Register>
        <DetailsNested />
      </Register>

      <DetailsOutside />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import Page from "./Page";
import { useState } from "react";
import { Paper, TextField, Typography, Snackbar } from "@material-ui/core";
import pencilPath from "../assets/pencil.svg";
import { register } from "../backendUtils";
import LoadingButton from "../components/LoadingButton";
import { useContext } from "react";
import { UserContext } from "../contexts";
import { Redirect } from "react-router-dom";
import Form from "../components/Form";



export default function RegisterPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onChange(e) {
    const { name: inputName, value: inputValue } = e.target;
    setValues({ ...values, [inputName]: inputValue });
  }

  async function requestRegister() {
    try {
      setIsSubmitting(true);
      await register(values.email, values.password);
      setIsRegistered(true);
      console.log("success register");
    } catch (e) {
      console.log(e);
      console.log("fail");
      setIsSnackbarOpen(true);
      setIsSubmitting(false);
    }
  }

  return (
    <Page>
      <Form
        title="Register"
        onSubmit={(e) => {
          e.preventDefault();
          requestRegister();
        }}>
        <TextField
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          value={values["email"]}
          onChange={onChange}
        />
        <TextField
          fullWidth
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          value={values["password"]}
          onChange={onChange}
        />
        <LoadingButton
         fullWidth
          type="submit"
          variant="contained"
          color="primary"
          isLoading={isSubmitting}

        >
          Register
          </LoadingButton>
      </Form>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
        message="Something went wrong!"
      />
      { isRegistered && <Redirect to="/login" />}
    </Page >
  );
}

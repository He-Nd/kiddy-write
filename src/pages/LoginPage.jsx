import Page from "./Page";
import { useState } from "react";
import { Snackbar, Paper, TextField, Typography } from "@material-ui/core";
import pencilPath from "../assets/pencil.svg";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../backendUtils";
import LoadingButton from "../components/LoadingButton";
import { useContext } from "react";
import { UserContext } from "../contexts";
import { Redirect } from "react-router-dom";
import Form from "../components/Form";

export default function LoginPage() {
  const userContext = useContext(UserContext);
  const [values, setValues] = useState({ email: "", password: "" });
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function requestLogin() {
    try {
      setIsSubmitting(true);
      await login(values.email, values.password);
      userContext.toggleLogin(values.email);
    } catch (e) {
      console.log(e);
      console.log("fail");
      setIsSnackbarOpen(true);
      setIsSubmitting(false);
    }
  }
  function onChange(e) {
    const { name: inputName, value: inputValue } = e.target;
    setValues({ ...values, [inputName]: inputValue });
  }
  return (
    <Page>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(values);

          requestLogin();
        }}
        title="Login"
      >
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
          Login
        </LoadingButton>
      </Form>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
        message="Invalid username or password"
      />
      {userContext.loggedIn && <Redirect to="/" />}
    </Page>
  );
}

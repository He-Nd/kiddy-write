import { createContext } from "react";

export const UserContext = createContext({
  loggedIn: false,
  email: "placeHolder",
  toggleLogin: () => {},
});

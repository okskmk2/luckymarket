import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LoginForm from "./components/LoginForm";
import LoginForm2 from "./components/LoginForm2";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Home from "./components/Home";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   // Purple and green play nicely together.
    //   main: grey[50],
    // },
    // secondary: {
    //   // This is green.A700 as hex.
    //   main: "#11cb5f",
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/LoginForm2" component={LoginForm2} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
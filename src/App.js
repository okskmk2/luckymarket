import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import SignUpForm2 from "./components/SignUpForm2";
import Home from "./components/Home";
import Test from "./components/muiappbarproto";
import Cart from "./components/Cart";
import Save from "./components/Save";
import Chat from "./components/Chat";
import More from "./components/More";
import CardDetail from "./components/CardDetail";
import Rev from "./components/Rev";
import Robby from "./components/Robby";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/SignUpForm" component={SignUpForm} />
        <Route exact path="/SignUpForm2" component={SignUpForm2} />
        <Route exact path="/carddetail" component={CardDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/save" component={Save} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/rev" component={Rev} />
        <Route exact path="/more" component={More} />
        <Route exact path="/robby" component={Robby} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

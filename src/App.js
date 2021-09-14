import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MessageForm from "./pages/MessageForm";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="w3-container">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/message_form" render={() => <MessageForm />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

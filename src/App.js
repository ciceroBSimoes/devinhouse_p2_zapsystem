import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NewMessageForm from "./pages/NewMessageForm";
import { connect } from "react-redux";
import {
  fetchOptions,
  loadChannels,
  loadTriggers,
} from "./redux/Select/select-actions";
import api from "./services/api";
import axios from "axios";

const App = ({ fetchOptions }) => {
  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return (
    <Router>
      <div className="top">
        <Header />
      </div>

      <div className="main">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/new_message_form"
            render={() => <NewMessageForm />}
          />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
        </Switch>
      </div>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOptions: () =>
      dispatch(
        fetchOptions(),
        axios.all([api.get("triggers"), api.get("channels")]).then(
          axios.spread((...responses) => {
            dispatch(loadTriggers(responses[0].data));
            dispatch(loadChannels(responses[1].data));
          })
        )
      ),
  };
};

export default connect(null, mapDispatchToProps)(App);

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "./services/api";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const App = () => {
  const [triggers, setTriggers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleGetTriggers = async () => {
    try {
      const response = await api.get("/triggers");
      setTriggers(response.data);
    } catch (error) {
      alert(error);
    }
  };
  const handleGetChannels = async () => {
    try {
      const response = await api.get("/channels");
      setChannels(response.data);
    } catch (error) {
      alert(error);
    }
  };
  const handleGetMessages = async (trigger, channel, time) => {
    try {
      console.log(trigger, channel, time);
      const response = await api.get(
        `/messages?trigger_like=${trigger}&channel_like=${channel}&timer_like=${time}`
      );
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetTriggers();
    handleGetChannels();
  }, []);

  return (
    <Router>
      <Header />
      <div className="w3-container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                triggers={triggers}
                channels={channels}
                messages={messages}
                handleGetMessages={handleGetMessages}
              />
            )}
          />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

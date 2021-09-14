import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MessagesTable from "../../components/MessagesTable";
import Filter from "../../components/Filter";
import api from "../../services/api";

const Home = () => {
  const [triggers, setTriggers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isSearchRequest, setIsSearchRequest] = useState(false);

  const handleGetTriggers = async () => {
    try {
      const response = await api.get("/triggers");
      setTriggers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetChannels = async () => {
    try {
      const response = await api.get("/channels");
      setChannels(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetMessages = async (searchQuery) => {
    try {
      const response = await api.get(`/messages?${searchQuery}`);
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    {
      isSearchRequest === false && handleGetTriggers();
      handleGetChannels();
    }
    handleGetMessages();
  }, []);

  return (
    <>
      <div className="main">
        <div className="w3-bar w3-margin-bottom">
          <span className="w3-bar-item w3-xxlarge">Mensagens</span>
          <Link to="/message_form">
            <button className="w3-margin w3-bar-item w3-right w3-button w3-indigo w3-round-xlarge">
              Nova Mensagem
            </button>
          </Link>
        </div>
      </div>

      <Filter
        triggers={triggers}
        channels={channels}
        isSearchRequest={isSearchRequest}
        setIsSearchRequest={setIsSearchRequest}
        handleGetMessages={handleGetMessages}
      />
      <MessagesTable messages={messages} />
    </>
  );
};

export default Home;

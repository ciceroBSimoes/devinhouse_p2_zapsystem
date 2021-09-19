import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessagesTable from "../../components/MessagesTable";
import Filter from "../../components/Filter";
import api from "../../services/api";
import { connect } from "react-redux";

const Home = ({ triggers, channels }) => {
  const [messages, setMessages] = useState([]);
  const [isSearchRequest, setIsSearchRequest] = useState(false);

  const handleGetMessages = async (searchQuery) => {
    try {
      const response = await api.get(`/messages?${searchQuery}`);
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetMessages();
  }, []);

  return (
    <>
      <div className="header">
        <h2>Mensagens</h2>
        <button type="submit" form="filterForm">
          Pesquisar
        </button>
        <Link to="/new_message_form">
          <button>Nova Mensagem</button>
        </Link>
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

const mapStateToProps = (state) => {
  return {
    triggers: state.select.triggers,
    channels: state.select.channels,
  };
};

export default connect(mapStateToProps)(Home);

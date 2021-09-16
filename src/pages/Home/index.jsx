import React, { useState } from "react";
import { Link } from "react-router-dom";
import MessagesTable from "../../components/MessagesTable";
import Filter from "../../components/Filter";
import api from "../../services/api";
import { connect } from "react-redux";

const Home = ({ triggers, channels }) => {
  //const [triggers, setTriggers] = useState([]);
  //const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isSearchRequest, setIsSearchRequest] = useState(false);

  /* const handleGetTriggers = async () => {
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
  }; */
  const handleGetMessages = async (searchQuery) => {
    try {
      const response = await api.get(`/messages?${searchQuery}`);
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect(() => {
    if (!isSearchRequest) {
      handleGetTriggers();
      handleGetChannels();
    }
    handleGetMessages();
  }, []); */

  return (
    <>
      <div>
        <div>
          <span>Mensagens</span>
          <Link to="/new_message_form">
            <button>Nova Mensagem</button>
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

const mapStateToProps = (state) => {
  return {
    triggers: state.select.triggers,
    channels: state.select.channels,
  };
};

export default connect(mapStateToProps)(Home);

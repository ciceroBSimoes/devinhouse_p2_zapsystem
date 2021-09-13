import React from "react";
import MessagesTable from "../../components/MessagesTable";

const Home = ({ triggers, channels, messages }) => {
  return (
    <>
      <div className="w3-bar w3-margin-bottom">
        <span className="w3-bar-item w3-xxlarge">Mensagens</span>
        <button className="w3-margin w3-bar-item w3-right w3-button w3-indigo w3-round-xlarge">
          Nova Mensagem
        </button>
        <button className="w3-margin w3-bar-item w3-right w3-button w3-border w3-round-xlarge">
          Pesquisar
        </button>
      </div>

      <form className="w3-container filter w3-large">
        <div>
          <label htmlFor="triggerSelect">Gatilho:</label>
          <select id="triggerSelect" className="w3-select w3-border">
            <option value=""></option>
            {triggers.map((trigger) => (
              <option key={trigger.id} value={trigger.name}>
                {trigger.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="channelSelect">Canal:</label>
          <select id="channelSelect" className="w3-select w3-border">
            <option value=""></option>
            {channels.map((channel) => (
              <option key={channel.id} value={channel.name}>
                {channel.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timerField">Timer:</label>
          <input type="text" id="timerField" className="w3-input w3-border" />
        </div>
      </form>

      <MessagesTable messages={messages} />
    </>
  );
};

export default Home;

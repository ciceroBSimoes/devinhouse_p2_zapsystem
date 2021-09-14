import React, { useState } from "react";

const Filter = ({
  triggers,
  channels,
  setIsSearchRequest,
  handleGetMessages,
}) => {
  const [query, setQuery] = useState({ trigger: "", channel: "", time: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = `trigger_like=${query.trigger}&channel_like=${query.channel}&timer_like=${query.time}`;
    handleGetMessages(searchQuery);
    setIsSearchRequest(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w3-container filter w3-large">
      <div>
        <label htmlFor="triggerSelect">Gatilho:</label>
        <select
          id="triggerSelect"
          className="w3-select w3-border"
          onChange={(e) => {
            setQuery({ ...query, trigger: e.target.value });
          }}
        >
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
        <select
          id="channelSelect"
          className="w3-select w3-border"
          onChange={(e) => {
            setQuery({ ...query, channel: e.target.value });
          }}
        >
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
        <input
          type="text"
          id="timerField"
          className="w3-input w3-border"
          onChange={(e) => {
            setQuery({ ...query, time: e.target.value });
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w3-right w3-button w3-border w3-round-large"
        >
          Pesquisar
        </button>
      </div>
    </form>
  );
};

export default Filter;

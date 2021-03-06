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
    <form onSubmit={handleSubmit} id="filterForm" className="form">
      <div className="form-field">
        <label htmlFor="triggerSelect">Gatilho:</label>
        <select
          id="triggerSelect"
          onChange={(e) => {
            setQuery({ ...query, trigger: e.target.value });
          }}
        >
          <option value="">Selecione...</option>
          {triggers.map((trigger) => (
            <option key={trigger.id} value={trigger.name}>
              {trigger.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="channelSelect">Canal:</label>
        <select
          id="channelSelect"
          onChange={(e) => {
            setQuery({ ...query, channel: e.target.value });
          }}
        >
          <option value="">Selecione...</option>
          {channels.map((channel) => (
            <option key={channel.id} value={channel.name}>
              {channel.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="timerField">Timer:</label>
        <input
          type="text"
          id="timerField"
          placeholder="HH:mm"
          onChange={(e) => {
            setQuery({ ...query, time: e.target.value });
          }}
        />
      </div>
    </form>
  );
};

export default Filter;

import React from "react";
import { connect } from "react-redux";

const NewMessageForm = ({ triggers, channels }) => {
  /**
   * {triggers.map((trigger) => (
          <option key={trigger.id} value={trigger.name}>
            {trigger.name}
          </option>
        ))}
   */

  return (
    <>
      <h1>CADASTRO</h1>
      <select name="teste" onChange={(e) => console.log(e.target.value)}>
        <option value=""></option>
        {triggers.map((trigger) => (
          <option key={trigger.id} value={trigger.name}>
            {trigger.name}
          </option>
        ))}
      </select>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    triggers: state.select.triggers,
    channels: state.select.channels,
  };
};

export default connect(mapStateToProps)(NewMessageForm);

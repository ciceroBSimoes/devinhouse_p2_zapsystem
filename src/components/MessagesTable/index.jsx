import React from "react";
import Swal from "sweetalert2";

const MessagesTable = ({ messages }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th width="30%">Gatilho</th>
            <th width="20%">Canal</th>
            <th width="20%">Tempo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 && (
            <tr>
              <td colSpan="4">Nenhuma Mensagem</td>
            </tr>
          )}
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.trigger}</td>
              <td>{message.channel}</td>
              <td>{message.timer}</td>
              <td>
                <button
                  onClick={() => {
                    Swal.fire("Mensagem", `${message.message}`);
                  }}
                >
                  Ver Mensagem
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MessagesTable;

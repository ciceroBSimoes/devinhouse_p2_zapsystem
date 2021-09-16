import React, { useState } from "react";
import Modal from "react-modal";

const MessagesTable = ({ messages }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalText, setModalText] = useState("");

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
                    setModalText(message.message);
                    setModalIsOpen(true);
                  }}
                >
                  Ver Mensagem
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {/*
          style={{
          overlay: {
            backgroundColor: "none",
          },
          content: {
            width: "600px",
            height: "500px",
            margin: "auto",
            borderRadius: "8px",
          },
        }}
        */}
        <h2>Mensagem</h2>
        <span onClick={() => setModalIsOpen(false)}>&times;</span>

        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default MessagesTable;

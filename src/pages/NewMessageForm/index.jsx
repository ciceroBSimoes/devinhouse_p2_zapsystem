import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";
import * as yup from "yup";
import api from "../../services/api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const NewMessageForm = ({ triggers, channels }) => {
  const formSchema = yup.object().shape({
    channel: yup.string().required("Selecione um Canal"),
    trigger: yup.string().required("Selecione um Gatilho"),
    timer: yup
      .string()
      .required("Informe um Timer")
      .matches(/^([0-9][0-6]):[0-5][0-9]$/, "Formato Inválido - HH:mm"),
    message: yup.string().required("A mensagem não pode ser vazia"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = async (data) => {
    await api.post("/messages", { id: Date.now(), ...data }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Mensagem cadastrada com sucesso",
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };
  /*
  Lorem ipsum dolor sit amet. Non esse exercitationem ea inventore debitis et praesentium nostrum
  et voluptatem perferendis vel aliquid ipsa et quisquam quibusdam.
  */
  return (
    <>
      <div className="header">
        <h2>Mensagens</h2>
        <Link to="/">
          <button>Voltar</button>
        </Link>

        <button type="submit" form="newMessage">
          Cadastrar
        </button>
      </div>
      <form id="newMessage" onSubmit={handleSubmit(onSubmit)} className="form-message">
        <div className="form-field-message">
          <label htmlFor="selectTrigger">Gatilho:</label>
          <select name="trigger" id="selectTrigger" {...register("trigger")} className={`${ errors.trigger? "alert-field" : "ok-field"}`}>
            <option value="">Selecione...</option>
            {triggers.map((trigger) => (
              <option key={trigger.id} value={trigger.name}>
                {trigger.name}
              </option>
            ))}
          </select>
          <p className="alert">{errors.trigger?.message}</p>
        </div>

        <div className="form-field-message">
          <label htmlFor="selectChannel">Canal:</label>
          <select name="channel" id="selectChannel" {...register("channel")} className={`${ errors.channel? "alert-field" : "ok-field"}`}>
            <option value="">Selecione...</option>
            {channels.map((channel) => (
              <option key={channel.id} value={channel.name}>
                {channel.name}
              </option>
            ))}
          </select>
          <p className="alert">{errors.channel?.message}</p>
        </div>

        <div className="form-field-message">
          <label htmlFor="inputTimer">Timer(max-96h):</label>
          <input
            type="text"
            name="timer"
            id="inputTimer"
            {...register("timer")}
            placeholder="HH:mm"
            className={`${ errors.timer? "alert-field" : "ok-field"}`}
          />
          <p className="alert">{errors.timer?.message}</p>
        </div>

        <div className="form-field-message text-area">
          <label htmlFor="messageText">Mensagem:</label>
          <textarea
            name="message"
            id="messageText"
            resizable="false"
            placeholder="Escreva aqui..."
            {...register("message")}
            rows="8"
            className={`${ errors.message? "alert-field" : "ok-field"}`}
          ></textarea>
          <p className="alert">{errors.message?.message}</p>
        </div>
      </form>
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

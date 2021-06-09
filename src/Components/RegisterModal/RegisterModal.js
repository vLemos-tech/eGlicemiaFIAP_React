import React, { useState } from "react";

import { Modal, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./RegisterModal.css";

// Componente responsável pela criação de registros de glicemia
const RegisterModal = (props) => {

  // Inicia o state dos valores a serem adicionados
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [value, setValue] = useState("");

  // Sobrescreve evento de submit para formatação da data e hora
  const onSubmit = (event) => {
    event.preventDefault(event);
    let dateAux = date.split("/");
    let timeAux = time.split(":");
    let dateTime = `${dateAux[2]}-${dateAux[1]}-${dateAux[0]}T${timeAux[0]}:${timeAux[1]}`
    props.addInfo(dateTime, value);
    props.handleClose();
  };

  return (
    <div>
      <Modal size="sm" show={props.show} backdrop="static" keyboard={false}>
        <Modal.Header className="register_header">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="register_arrow"
            onClick={props.handleClose}
          />
          <Modal.Title className="register_title">
            Adicionar Glicemia
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="register_form" onSubmit={onSubmit}>
            <Form.Group className="register_info">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="text"
                placeholder="dd/MM/yyyy"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="register_info">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="text"
                placeholder="hh:mm"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="register_info">
              <Form.Label>mg/dL</Form.Label>
              <Form.Control
                type="text"
                placeholder="99.9"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Button type="submit" variant="secondary btn_add">
              Adicionar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RegisterModal;

import React from "react";

import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import GlicemiaInfo from "../GlicemiaInfo/GlicemiaInfo";

import "./GlicemiaList.css";

// Responsável pela parte visual do CRUD de glicemias
const GlicemiaListView = (props) => {

  // Variáveis que possuirão os objetos da view
  let errorMessage = null;
  let connectingMessage = null;
  let glicemiasItens = [];

  if (!props.loadedList) {
    // Verifica se está realizando uma busca
    connectingMessage = (
      <div className="connecting_waiting">
        <Spinner animation="border" />
      </div>
    );
  }
  else if (props.searchGlicemiasWithSuccess === -1) {
    // Exibe mensagem se houve uma conexão com erro
    errorMessage = (
      <div className="message_error">
        Houve um erro ao buscar a informação. Tente novamente mais tarde!
      </div>
    );
  } else if (props.glicemiaList.length === 0) {
    // Exibe mensagem não tem nenhuma linha encontrado
    errorMessage = (
      <div className="message_error">Nenhuma linha encontrada.</div>
    );
  } else {
    props.glicemiaList.forEach((glicemiaInfo, key) => {
      glicemiasItens.push(
        <GlicemiaInfo key={key} glicemiaInfo={glicemiaInfo} deleteInfo={props.deleteInfo}/>
      );
    });
  }

  return (
    <Container>
      <Row className="list_header">
        <Col className="list_header_title">DATA</Col>
        <Col className="list_header_title">HORA</Col>
        <Col className="list_header_title">GLICEMIA (mg/dL)</Col>
        <Col className="list_header_title">AÇÕES</Col>
      </Row>
      <Row>
        <Col className="list_itens">
          {connectingMessage}
          {errorMessage}
          {glicemiasItens}
        </Col>
      </Row>
      <Row className="list_add">
        <Button variant="add" onClick={props.modalShow}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Row>
    </Container>
  );
};

export default GlicemiaListView;

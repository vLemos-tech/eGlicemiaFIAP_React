import React from "react";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./GlicemiaInfo.css";

// Componente que corresponde a cada registro de glicemia
const GlicemiaInfo = (props) => {
  
  // Formatação de data
  let glicemiaData = props.glicemiaInfo.data;
  let dateTime = new Date(
    glicemiaData[0],
    glicemiaData[1],
    glicemiaData[2],
    glicemiaData[3],
    glicemiaData[4]
  );

  return (
    <Row className="list_item">
      <Col className="list_info">
        {dateTime.getDate() > 9 ? dateTime.getDate() : `0${dateTime.getDate()}`}
        /
        {dateTime.getMonth() > 9
          ? dateTime.getMonth()
          : `0${dateTime.getMonth()}`}
        /{dateTime.getFullYear()}
      </Col>
      <Col className="list_info">
        {dateTime.getHours() > 9 ? dateTime.getHours() : `0${dateTime.getHours()}`}
        :
        {dateTime.getMinutes() > 9 ? dateTime.getMinutes() : `0${dateTime.getMinutes()}`}
      </Col>
      <Col className="list_info">{props.glicemiaInfo.valor}</Col>
      <Col className="list_info">
        <Row>
          <Col className='btn_edit'>
            <FontAwesomeIcon icon={faPen} />
          </Col>
          <Col className='btn_delete'>
            <FontAwesomeIcon icon={faTrashAlt} onClick={() => props.deleteInfo(props.glicemiaInfo.id)} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GlicemiaInfo;

import React from "react";

import {
  Container,
  Row,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faHome, faClock } from "@fortawesome/free-solid-svg-icons";

import "./Tab.css";

// Componente da barra de navegação inferior
const Tab = () => {
  return (
    <Container>
      <Row className="tab_row">
        <ToggleButtonGroup
          type="radio"
          className="tab_btn_group"
          name="options"
          defaultValue={2}
        >
          <ToggleButton variant="tab left" value={1} disabled>
            <FontAwesomeIcon icon={faUserAlt} />
          </ToggleButton>
          <ToggleButton variant="tab" value={2}>
            <FontAwesomeIcon icon={faHome} />
          </ToggleButton>
          <ToggleButton variant="tab right" value={3} disabled>
            <FontAwesomeIcon icon={faClock} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
    </Container>
  );
};

export default Tab;

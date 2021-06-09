import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import image_profile from "../../Assets/Image_Profile.png";

import "./Profile.css";

// Componente de identificação e exibição do usuário
const Profile = (props) => {

  return (
    <Container fluid={true} className="container_profile">
      <Row>
        <Col xs={9} className="profile_title">
            <Row className="profile_greeting">
                Olá,
            </Row>
            <Row className="profile_nickname">
                Benedita Guimarães
            </Row>
        </Col>
        <Col xs={3} className="wrapper_image">
          <Image fluid src={image_profile} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;

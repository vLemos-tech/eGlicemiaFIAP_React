import React from 'react';

import {Container, Row} from 'react-bootstrap';

import Profile from '../../Components/Profile/Profile'
import Tab from '../../Components/Tab/Tab'
import GlicemiaList from '../../Components/GlicemiaList/GlicemiaListController'

import './Home.css';

// Estruturador da página principal
const HomeView = (props) => {
    return (
        <Container className="container_home">

            <Row>
                <Profile />
            </Row>

            <Row>
                <GlicemiaList />
            </Row>

            <Row className="wrapper_tab">
                <Tab />
            </Row>

        </Container>
    )
}
export default HomeView;
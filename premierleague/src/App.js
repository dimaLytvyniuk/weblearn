import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import ReactBootstrap from 'react-bootstrap'
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header >
            <Navbar.Brand>
              <a href="#"><img src="../public/premier_league_logo.png"/>React</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
            <h1>dksjfklas</h1>
            <h1>dfskjf</h1>
            <h1>dakjjfkas</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={3} md={2}>
                <h2>dfdaskjg</h2>
            </Col>
            <Col xs={9} md={6}>
              <Row>
                  <Col xs={6} md={5}>
                      <div>dfdaskjddsajfhyhgdlafdfasjkdfjasdfjhdfsjdashjdfahjshjdfhdfdf</div>
                  </Col>
                </Row>
              <Row>
                <Col xs={3} md={3}>
                    <h2>kfdajsk</h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

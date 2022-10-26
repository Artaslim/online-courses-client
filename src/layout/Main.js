import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import Header from "../Pages/Shared/Header/Header";
import Item from "../Pages/Shared/Item/Item";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <Item></Item>
          </Col>
          <Col lg="10">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;

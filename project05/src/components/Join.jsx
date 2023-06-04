import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
const Join = () => {
  /* react - bootstrap npm install react-bootstrap bootstrap */

  const [userData, setUserData] = useState({});
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [add, setAdd] = useState("");
  const [phone, setPhone] = useState("");

  const joinUser = (e) => {
    console.log("join User");
    e.preventDefault();

    setUserData({
      id: id,
      pw: pw,
      add: add,
      phone: phone,
    });
  };

  useEffect(() => {
    console.log("user Data Change", userData);
  }, [userData]);
  return (
    <div className="list-container">
      <Form onSubmit={joinUser}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="id"
              placeholder="Enter ID"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            onChange={(e) => {
              setAdd(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder="82-10-XXXX-XXXX"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Join;

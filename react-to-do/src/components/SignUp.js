import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUserHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <Form
        style={{
          paddingTop: 150,
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={onChangeHandler}
                value={email}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={onChangeHandler}
                value={password}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={(e) => createUserHandler(e, email, password)}>
          Sign Up
        </Button>
      </Form>
      <p className="text-center my-3">or</p>
      <button
        className=" bg-danger w-full h-30 p-2 text-white"
        onClick={signInWithGoogle}
      >
        Sign In with Google
      </button>
      <p className="text-center my-3 ">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-600 my-3 mx-auto"
        >
          Sign in here
        </Link>
      </p>
    </>
  );
};

export default SignUp;

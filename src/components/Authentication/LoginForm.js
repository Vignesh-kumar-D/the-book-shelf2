import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = (props) => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const formHandler = (event) => {
    event.preventDefault();
    props.loginHandler(event, enteredEmail, enteredPassword);
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 4 }} className="mt-5">
          <Form onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold"> Enter Email address</Form.Label>
              <Form.Control
                type="email"
                ref={enteredEmail}
                placeholder="Enter email"
                required
                onChange={props.clearError}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold"> Enter Password</Form.Label>
              <Form.Control
                type="password"
                ref={enteredPassword}
                placeholder="Password"
                required
                minLength="6"
                onChange={props.clearError}
              />
            </Form.Group>
            {props.error ? <p className="text-danger">{props.error}</p> : ""}

            <Button
              className="w-100"
              variant="primary"
              type="submit"
              onClick={formHandler}
            >
              Login
            </Button>
            <Button
              className="w-100 mt-3"
              variant="secondary"
              type="button"
              onClick={formHandler}
            >
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;

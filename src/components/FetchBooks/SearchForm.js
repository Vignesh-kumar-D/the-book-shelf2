import { Form, Row, Col, Button, Container } from "react-bootstrap";
import SearchInputGroup from "./SeachInputGroup";
import { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import requestBookList from "../../APICall/requestBookList";
const Searchform = (props) => {
  const history = useHistory();
  const location = useLocation();
  const searchBy = useRef();
  const searchTerm = useRef();
  let data;
  const getBooksHandler = async (event) => {
    event.preventDefault();
    history.push({
      pathname: location.pathname,
      search: `?searchBy=${searchBy.current.value}:searchTerm=${searchTerm.current.value}`,
    });
    data = await requestBookList(
      searchBy.current.value,
      searchTerm.current.value
    );
    props.setData(data);
  };
  return (
    <>
      <Container>
        <Form>
          <Row className="mt-3">
            <Col>
              <SearchInputGroup ref={{ searchBy, searchTerm }} />
            </Col>
            <Col xs={4} className="my-1">
              <Button variant="primary" type="submit" onClick={getBooksHandler}>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Searchform;

import { InputGroup, Form, Col } from "react-bootstrap";
import React from "react";
const SearchInputGroup = React.forwardRef((props, ref) => {
  return (
    <>
      <InputGroup className="mb-3">
        <Col xs={3} className="my-1">
          <Form.Select aria-label="Default select example" ref={ref.searchBy}>
            <option value="">All Fields</option>
            <option value="inauthor">Author</option>
            <option value="inpublisher">Publisher</option>
            <option value="intitle">Title</option>
            <option value="subject">Category</option>
            <option value="isbn">ISBN</option>
          </Form.Select>
        </Col>
        <Col xs={9} className="my-1">
          <Form.Control
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={ref.searchTerm}
          />
        </Col>
      </InputGroup>
    </>
  );
});
export default SearchInputGroup;

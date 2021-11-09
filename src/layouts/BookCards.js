import { Card, Button, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteButton from "./FavoriteButton";
import BookStatusButton from "./BookStatusButton";
const BookCards = (props) => {
  return (
    <Col height="20rem" className="mb-2" key={props.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          height="200rem"
          style={{ objectFit: "contain" }}
          src={props?.thumbnail}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.subtitle}</Card.Text>
          <Form>
            <BookStatusButton
              id={props.id}
              title={props.title}
              subtitle={props.subtitle}
              thumbnail={props.thumbnail}
              previewLink={props.previewLink}
              checked={props.checked}
              myList={props.myList}
            />
            <FavoriteButton
              id={props.id}
              title={props.title}
              subtitle={props.subtitle}
              thumbnail={props.thumbnail}
              previewLink={props.previewLink}
              checked={props.checked}
              myList={props.myList}
            />
          </Form>
          <a
            href={props.previewLink}
            target="_blank"
            content="Know more about this Book"
            rel="noreferrer"
          >
            <Button variant="primary">Know more about this Book</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCards;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Movie({item,back}) {
  return (
    <Card>
      <Card.Img variant="top" src={item.show.image.medium} />
      <Card.Body>
        <Card.Title>{item.show.name}</Card.Title>
        <Card.Text>{item.show.summary}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Status : {item.show.status}</ListGroup.Item>
        <ListGroup.Item>Runtime : {item.show.runtime}</ListGroup.Item>
        <ListGroup.Item>Premiered : {item.show.premiered}</ListGroup.Item>
      </ListGroup>
        <Button onClick={()=>back(false)}>Go to movies list</Button>
      </Card.Body>
    </Card>
  );
}

export default Movie;
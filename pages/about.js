import NavBarComponent from '@/components/NavBarComponent'
import React from 'react'
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function about() {
  return (

    <>
      <Container className={"d-flex flex-wrap gap-3"}>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card> <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the cards content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
      </Card>

      </Container>

    </>
  )
}

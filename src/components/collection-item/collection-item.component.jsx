import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CollectionItem = ({ id, name, status, species, type, gender, image }) => (

  <Card style={{ width: '13rem'} }>
      <Card.Img variant="top" src={ image } height = "130"  />
      <Card.Body className="bg-dark bg-gradient text-light font-weight-bold">
        <Card.Title className="text-center">{ name }</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item className='text-left text-dark'>gender: { gender }</ListGroup.Item>
          <ListGroup.Item className='text-left text-dark'>status: { status }</ListGroup.Item>
          <ListGroup.Item className='text-left text-dark'>type: { type }</ListGroup.Item>
          <ListGroup.Item className='text-left text-dark'>species: { species }</ListGroup.Item>
        </ListGroup>
      </Card.Body>
  </Card>
 
);

export default CollectionItem;

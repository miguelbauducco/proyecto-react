import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../styles/item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({item}) => {


    return (
        <Link className='link' to={`/detail/${item.id}`}>
            <div className='container'>
        <Card border="warning" bg="dark" style={{ width: '280px' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
        <Card.Title className='title'>{item.title}</Card.Title>
        <Card.Text className='element'>
        ${item.price}
        </Card.Text>
        <Button variant="warning">DETALLES</Button>
        </Card.Body>
        </Card>
            </div>
        </Link>
    );
}

export default Item;
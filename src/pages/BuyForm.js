import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';




export const BuyForm = () => {

return (
    <div>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNme">
        <Form.Label></Form.Label>
        <Form.Control type="name" placeholder="Nombre y apellido" />
        </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label></Form.Label>
        <Form.Control placeholder="Direccion y numeración" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="Numero de celular" />
    </Form.Group>

    <Row className="mb-3">
        <Form.Group  as={Col} controlId="formGridCity">
        <Form.Label></Form.Label>
        <Form.Control placeholder="Ciudad" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label></Form.Label>
        <Form.Select defaultValue="...">
            <option>Seleccione su provincia</option>
            <option>Buenos Aires</option>
        </Form.Select>
        </Form.Group>
    </Row>

    <button>
        Llenar formulario
    </button>
    </Form>
</div>
);
}

export default BuyForm;


import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import firebaseApp from '../firebase/config'
import  { getFirestore, collection, addDoc }  from 'firebase/firestore'


    const db = getFirestore()

export const BuyForm = () => {

    const initialValue = {
            name:'', 
            email:'',
            phone:'',
            city:'',
            state:'',
            address:'',
        }

    const [buyer, setBuyer] = useState(initialValue)

    const catchInputs = (e) => {
        setBuyer({...buyer, [e.target.name]: e.target.value})
    }

    const saveBuy = async(e) =>{
        e.preventDefault();
        try {
            await addDoc(collection(db,'buys'),{
                ...buyer
            })
        } catch (error) {
            console.log(Error);
        }
        setBuyer({...initialValue})
    }

return (
    <div>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label></Form.Label>
        <Form.Control name="email" type="email" placeholder="Email" onChange={catchInputs} value={buyer.email}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNme">
        <Form.Label></Form.Label>
        <Form.Control name="name" type="name" placeholder="Nombre y apellido" onChange={catchInputs} value={buyer.name}/>
        </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label></Form.Label>
        <Form.Control name="address" placeholder="Direccion y numeración" onChange={catchInputs} value={buyer.address}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label></Form.Label>
        <Form.Control name="phone" type="number" placeholder="Numero de celular" onChange={catchInputs} value={buyer.phone} />
    </Form.Group>

    <Row className="mb-3">
        <Form.Group  as={Col} controlId="formGridCity">
        <Form.Label></Form.Label>
        <Form.Control name="city"  placeholder="Ciudad" onChange={catchInputs} value={buyer.city}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.Label></Form.Label>
        <Form.Select name="state" defaultValue="..." onChange={catchInputs} value={buyer.state}>
            <option>Seleccione su provincia</option>
            <option>Buenos Aires</option>
            <option>Ciudad Autónoma de Buenos Aires</option>
            <option>Catamarca</option>
            <option>Chaco</option>
            <option>Chubut</option>
            <option>Córdoba</option>
            <option>Corrientes</option>
            <option>Entre Ríos</option>
            <option>Formosa</option>
            <option>Jujuy</option>
            <option>La Pampa</option>
            <option>La Rioja</option>
            <option>Mendoza</option>
            <option>Misiones</option>
            <option>Neuquén</option>
            <option>Río Negro</option>
            <option>Salta</option>
            <option>San Juan</option>
            <option>San Luis</option>
            <option>Santa Cruz</option>
            <option>Santa Fe</option>
            <option>Santiago del Estero</option>
            <option>Tierra del Fuego</option>
            <option>Tucumán</option>
        </Form.Select>
        </Form.Group>
    </Row>

    <button onClick={saveBuy} type="submit">
        Finalizar
    </button>
    </Form>
</div>
);
}

export default BuyForm;


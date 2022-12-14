import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import firebaseApp from '../firebase/config'
import  { getFirestore, collection, addDoc }  from 'firebase/firestore'
import { useCartContext } from '../CartContext';
import Swal from 'sweetalert2'


    const db = getFirestore()

    export const BuyForm = () => {
    
    const {cart, totalPrice, cleanCart} = useCartContext();

    const buy = {

        items: cart.map( product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})) ,
        total: totalPrice(),
    }

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
                buyer,
                buy,
            })
        } catch (error) {
            console.log(Error);
        }
        setBuyer(
        {...initialValue})
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Compra realizada con exito!',
                text:'Nos contactaremos por correo electronico para continuar con los detalles',
                showConfirmButton: true,
                confirmButtonColor:'black',
                timer: 80000,
});
        cleanCart()
    };



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
        <Form.Control name="address" placeholder="Direccion y numeraci??n" onChange={catchInputs} value={buyer.address}/>
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
            <option>Ciudad Aut??noma de Buenos Aires</option>
            <option>Catamarca</option>
            <option>Chaco</option>
            <option>Chubut</option>
            <option>C??rdoba</option>
            <option>Corrientes</option>
            <option>Entre R??os</option>
            <option>Formosa</option>
            <option>Jujuy</option>
            <option>La Pampa</option>
            <option>La Rioja</option>
            <option>Mendoza</option>
            <option>Misiones</option>
            <option>Neuqu??n</option>
            <option>R??o Negro</option>
            <option>Salta</option>
            <option>San Juan</option>
            <option>San Luis</option>
            <option>Santa Cruz</option>
            <option>Santa Fe</option>
            <option>Santiago del Estero</option>
            <option>Tierra del Fuego</option>
            <option>Tucum??n</option>
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


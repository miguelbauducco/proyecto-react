import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




export const ItemDetail = ({title,price,img,detail}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
    <>
    <div className='d-flex justify-content-center'>
    <Button variant="warning" onClick={handleShow} size='sm' >
        Detalles de producto
    </Button>
    </div>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <div><img src={img} alt="fotoproducto"/></div>
        <Modal.Title>
            <div>{title}</div>
            <div className='d-flex justify-content-center'>{price}</div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>{detail}</div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
            Cerrar
        </Button>
        <Button variant="warning" onClick={handleClose}>
            Agregar al carrito
        </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default ItemDetail;

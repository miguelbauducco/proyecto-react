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

    <Modal show={show} animation={false}>
        <Modal.Header  className='bg-warning'>
            <div>
                <img src={img} alt="fotoproducto" style={{width:200, height:150}}/>
            </div>
        <Modal.Title className='bg-warning'>
            <div>{title}</div>
            <div className=''>{price}</div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-warning'>
            <div>{detail}</div>
        </Modal.Body>
        <Modal.Footer className='bg-warning'>
        <Button variant="danger" onClick={handleClose}>
            Cerrar
        </Button>
        <Button variant="dark" onClick={handleClose}>
            Agregar al carrito
        </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default ItemDetail;

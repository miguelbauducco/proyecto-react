import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemDetail = ({productDetailInfo}) => {

return(
    <>
    <h3>
        Detalles de producto
    </h3>
            <div>
                <img src={productDetailInfo.img} alt="fotoproducto" style={{width:200, height:150}}/>
            </div>
            <div>{productDetailInfo.title}</div>
            <div>{productDetailInfo.price}</div>
            <div>{productDetailInfo.detail}</div>
        <button>
            Agregar al carrito
        </button>
    </>
);
}

export default ItemDetail;

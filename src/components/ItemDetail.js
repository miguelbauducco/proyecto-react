import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemDetail = ({productDetailInfo}) => {

return(
    <div>
    <h3>
        Detalles de producto
    </h3>
    {console.log(productDetailInfo)}
            <div>
                <img src={productDetailInfo.img} alt="fotoproducto" style={{width:200, height:150}}/>
            </div>
            <div>{productDetailInfo.title}</div>
            <div>{productDetailInfo.price}</div>
            <div>{productDetailInfo.detail}</div>
        <button>
            Agregar al carrito
        </button>
    </div>
);
}

export default ItemDetail;

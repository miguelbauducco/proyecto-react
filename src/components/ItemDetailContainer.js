import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = ({productDetail}) => {

return (
    <ItemDetail productDetailInfo={productDetail}/>
);
}


export default ItemDetailContainer
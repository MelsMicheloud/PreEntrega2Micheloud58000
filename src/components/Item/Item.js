import './Item.css';
import {Link} from 'react-router-dom';

function Item ({id, name, img, price, stock}){

    console.log(stock)

    return(
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture className="Imagen">
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
                stock disponible: {stock}
            </p>
        </section>
        <footer className="CardItemFooter">
            <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
        </footer>
    </article>
    )
}

export default Item;

function ProfileCard ( {titulo,precio,img} ){
    return (
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={img} alt="productoCanin"/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">{titulo}</h3>
                    <h4 className="subtitle is-6">{precio}</h4>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
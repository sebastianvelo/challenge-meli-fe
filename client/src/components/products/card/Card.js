import { Link } from "react-router-dom";

import freeshipping from "../../../assets/ic_shipping.png";

import "./Card.css";

function Card(props) {
    return (
        <div className="grid card">
            <div className="col-3 card-image">
                <Link to={{ pathname: "/items/" + props.product.id }}>
                    <img className="item-image" src={props.product.picture} alt={props.product.title}></img>
                </Link>
            </div>
            <div className="col-7">
                <p className="card-price">{props.product.price.currency} {props.product.price.amount} {props.product.freeShipping && <img src={freeshipping} alt="Envio gratis!" />} </p>
                <Link to={{ pathname: "/items/" + props.product.id }}>
                    <p className="card-title">
                        {props.product.title}
                    </p>
                </Link>
            </div>
            <div className="col-2">
                <p className="card-location">{props.product.city}</p>
            </div>
        </div>
    );
}
export default Card;
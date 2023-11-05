import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ data }) {
    return (
        <Link id={data.id} to={`Details/${data.id}`}>
            <figure className="cardContent">
                <img src={data.cover} alt="Présentation" />
                <figcaption>{data.title}</figcaption>
            </figure>
        </Link>
    );
}

export default Card;
/* eslint-disable react/prop-types */
import { star } from '../../assets';
import './index.css';

const CardAvaliação = (props) => {
    return (
        <article className="card">
                <div className="profile">
                    <img src={props.profileImage} alt="mariana" />
                    <div className="profile-name">
                        <h3>{props.name}</h3>
                        <p>{props.timeAtApp}</p>
                    </div>
                </div>
                <div className="avaliacao">
                <p className="estrelas">
                    <img src={star} className="stars" alt="estrelas de avaliação"/>
                    <img src={star} className="stars" alt="estrelas de avaliação"/>
                    <img src={star} className="stars" alt="estrelas de avaliação"/>
                    <img src={star} className="stars" alt="estrelas de avaliação"/>
                    <img src={star} className="stars" alt="estrelas de avaliação"/>
                     • <strong>{props.avaliationTime}</strong> • {props.stayedTime}
                </p>
                <p>{props.avaliation}</p>
                </div>
            </article>
    );
};

export default CardAvaliação
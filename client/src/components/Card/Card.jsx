import React from 'react';
import { URL } from '../../libs/url';

const Card = ({ data }) => {
    const { _id, nombre, msg_description, actividad, ciudad, likes} = data;

    const uri = URL + `/proveedor/imagen/`;

    return (
        <div className="card col-auto mt-3 ms-3" style={{ width: '19rem' }}>
            <img src={`${uri}${_id}`} className="card-img-top mt-1" alt={_id} />
            <div className="card-body">
                <h5 className="card-title">{nombre} </h5>
                <p className="card-text">{msg_description}</p>
                <p className="card-text">Ciudad: {ciudad}</p>
                <p className="card-text">Actividad: {actividad}</p>
                <p className="card-text">Likes: {likes}</p>
                <a href="#" className="">
                    Ver mas...
                </a>
            </div>
        </div>
    );
};

export default Card;

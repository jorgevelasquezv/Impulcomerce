import React from 'react';
import { URL } from '../../libs/url';

const Card = ({ data }) => {
    const { tittle, text, id } = data;

    const uri = URL + `/proveedor/imagen/`;

    return (
        <div className="card col-auto mt-3 ms-3" style={{ width: '19rem' }}>
            <img src={`${uri}${id}`} className="card-img-top" alt={id} />
            <div className="card-body">
                <h5 className="card-title">{tittle} </h5>
                <p className="card-text">{text}</p>
                <a href="#" className="">
                    Ver mas...
                </a>
            </div>
        </div>
    );
};

export default Card;

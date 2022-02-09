import React from 'react';

import { inputs } from './elements';
import SelectData from '../SelectData/SelectData';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';

const RegistroClientes = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            nombre: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            direccion: e.target[3].value,
            telefono1: e.target[4].value,
            telefono2: e.target[5].value,
            whatsapp: e.target[6].value,
            telegram: e.target[7].value,
            facebook: e.target[8].value,
            instagram: e.target[9].value,
            twitter: e.target[10].value,
            linkedin: e.target[11].value,
            categoria: e.target[12].value,
            departamento: e.target[13].value,
            ciudad: e.target[14].value,
            msg_description: e.target[15].value,
        }
        const data2 = {
            email: e.target[1].value,
            password: e.target[2].value,
        }
        dispatch(login(data2))
    };

    return (
        <div className="d-flex justify-content-center m-3">
            <div className="text-end w-75">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {inputs.map((input, index) => (
                            <div
                                key={index}
                                className="form-floating mb-3 col-lg-4"
                            >
                                <input
                                    type={input.type}
                                    className="form-control"
                                    id={input.id}
                                    placeholder={input.placeholder}
                                />
                                <label className="m-2" htmlFor="floatingInput">
                                    {input.text}
                                </label>
                            </div>
                        ))}

                        <SelectData />
                    </div>
                    <div className="form-floating mb-3 col-lg-12">
                        <textarea
                            className="form-control"
                            placeholder="Ingrese un mensaje descriptivo de su actividad"
                            id="floatingTextarea"
                            defaultValue={''}
                            style={{ height: '160px' }}
                        />
                        <label htmlFor="floatingTextarea">
                            Ingrese un mensaje descriptivo de su actividad
                        </label>
                    </div>
                    <button
                        className="btn btn-outline-success mb-3 col-lg-4"
                        type="submit"
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroClientes;

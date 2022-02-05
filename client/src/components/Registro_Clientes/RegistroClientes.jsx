import React from 'react';

import {inputs} from './elements';


const RegistroClientes = () => {
    return (
        <div className="d-flex justify-content-center m-3">
            <div className="text-end w-75" >
                <div className="row">
                    {inputs.map((input, index) => (
                        <div key={index} className="form-floating mb-3 col-md-4">
                            <input
                                type={input.type}
                                className="form-control"
                                id={input.id}
                                placeholder={input.placeholder}
                            />
                            <label className='m-2' htmlFor="floatingInput">{input.text} </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RegistroClientes;

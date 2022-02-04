import React from 'react';

const inputs = [
    {
        type: 'email',
        id: 'floatingInput',
        placeholder: 'name@example.com',
        text: 'Correo Electronico',
    },
    {
        type: 'password',
        id: 'floatingPassword',
        placeholder: 'Password',
        text: 'Contraseña',
    },
];

const RegistroClientes = () => {
    return (
        <div className="container">
            {inputs.map((input, index) => (
                <div key={index} className="form-floating mb-3">
                    <input
                        type={input.type}
                        className="form-control"
                        id={input.id}
                        placeholder={input.placeholder}
                    />
                    <label htmlFor="floatingInput">{input.text} </label>
                </div>
            ))}
        </div>
    );
};

export default RegistroClientes;

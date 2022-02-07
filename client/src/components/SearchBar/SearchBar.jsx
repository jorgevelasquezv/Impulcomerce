import React, { useState } from 'react';

import { Categorias, Ciudades, Departamentos } from '../../libs/search.lib';

const SearchBar = () => {

    const [departamento, setDepartamento] = useState(0);

    const handleDepartamento = (e) =>
    {
        setDepartamento(Departamentos.indexOf(e.target.value));
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#450EB5' }}>
            <form
                className="d-flex p-2"
                onSubmit={handleOnSubmit}
                style={{ backgroundColor: '#450EB5' }}
            >
                <select className="form-select me-2" aria-label="Actividad">
                    {Categorias.map((categoria, index) => (
                        <option key={index} defaultValue={categoria.length + 1}>
                            {categoria}
                        </option>
                    ))}
                </select>
                <select
                    className="form-select me-2"
                    aria-label="Departamento"
                    onChange={handleDepartamento}
                >
                    {Departamentos.map((departamento, index) => (
                        <option
                            key={index}
                            defaultValue={departamento.length + 1}
                        >
                            {departamento}
                        </option>
                    ))}
                </select>
                <select className="form-select me-2" aria-label="Ciudad" disabled={departamento === 0}>
                    {Ciudades[departamento].map((ciudad, index) => (
                        <option key={index} defaultValue={ciudad.length + 1}>
                            {ciudad}
                        </option>
                    ))}
                </select>
                <input
                    className="form-control me-2 flex-grow-1"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                />
                <button
                    className="btn btn-dark"
                    type="submit"
                    style={{ backgroundColor: '#450EB5' }}
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;

import React from 'react';

import SelectData from '../SelectData/SelectData';

const SearchBar = ({loadProveedores}) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const actividad = e.target[0].value === 'Categorias' ? '' : e.target[0].value;
        const departamento = e.target[1].value === 'Departamentos' ? '' : e.target[1].value;
        const ciudad = e.target[2].value === 'Ciudades' ? '' : e.target[2].value;
        const nombre = e.target[3].value;
        const param = {
            actividad,
            departamento,
            ciudad,
            nombre,
        };
        loadProveedores(param);
    };

    return (
        <div
            className="row sticky-top"
            style={{ backgroundColor: '#450EB5', top: '55px' }}
        >
            <form onSubmit={handleOnSubmit}>
                <div className="row mt-3 me-1 ms-1">
                    <div className="col-lg-8">
                        <div className="row">
                            <SelectData />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar"
                                aria-label="Buscar"
                                aria-describedby="button-addon2"
                            />
                            <button
                                className="btn btn-dark"
                                type="submit"
                                id="button-addon2"
                                style={{
                                    backgroundColor: '#450EB5',
                                }}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;

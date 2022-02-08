import React, { useState } from 'react';
import { Categorias, Ciudades, Departamentos } from "../../libs/search.lib";

const SelectData = () => {
       const [departamento, setDepartamento] = useState(0);

       const handleDepartamento = (e) => {
           setDepartamento(Departamentos.indexOf(e.target.value));
       };
    return (
        <>
            <div className="mb-3 col-lg-4">
                <select className="form-select " aria-label="Actividad">
                    {Categorias.map((categoria, index) => (
                        <option key={index} defaultValue={categoria.length + 1}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3 col-lg-4">
                <select
                    className="form-select"
                    aria-label="Departamento"
                    onChange={handleDepartamento}
                >
                    {Departamentos.map((departament, index) => (
                        <option
                            key={index}
                            defaultValue={departament.length + 1}
                        >
                            {departament}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3 col-lg-4">
                <select
                    className="form-select mb-3 col-lg-4"
                    aria-label="Ciudad"
                    disabled={departamento === 0}
                >
                    {Ciudades[departamento].map((ciudad, index) => (
                        <option key={index} defaultValue={ciudad.length + 1}>
                            {ciudad}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default SelectData;

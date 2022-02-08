import React from "react";

import { inputs } from "./elements";
import SelectData from "../SelectData/SelectData";

const RegistroClientes = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);
        console.log(e.target[4].value);
        console.log(e.target[5].value);
        console.log(e.target[6].value);
        console.log(e.target[7].value);
        console.log(e.target[8].value);
        console.log(e.target[9].value);
        console.log(e.target[10].value);
        console.log(e.target[11].value);
        console.log(e.target[12].value);
        console.log(e.target[13].value);
        console.log(e.target[14].value);
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
                            defaultValue={""}
                            style={{ height: "160px" }}
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

import { useState, useEffect } from 'react';
import Axios from 'axios';

export const useHome = () => {

    const [emprendedores, setEmprendedores] = useState(null);
    const [imagenes, setImagenes] = useState(null);

    const loadProveedores = async (param) => {
        await Axios.post('/user/filter/', param)
            .then((response) => {
                setEmprendedores(response.data.proveedores);
            })
            .catch((err) => {
                console.log(err);
            });
        return emprendedores;
    };

    const getEmprendedores = async () => {
        if (!emprendedores) {
            try {
                const response = await Axios({
                    method: 'get',
                    url: `/user/visible`,
                    responseType: 'json',
                });
                setEmprendedores(response.data.proveedores);

                setImagenes(imagenes ?? response.data.proveedores);

                return emprendedores;
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        getEmprendedores();
    });

    return [emprendedores, loadProveedores]
}

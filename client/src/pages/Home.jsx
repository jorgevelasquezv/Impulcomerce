import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import Card from '../components/Card/Card';
import Carousel from '../components/Carousel/Carousel';
import SearchBar from '../components/SearchBar/SearchBar';
import Spinner from '../components/Spinner/Spinner';

const Home = () => {
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

    useEffect(() => {
        async function getEmprendedores() {
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
        }
        getEmprendedores();
    });

    return (
        <>
            <Carousel />
            <SearchBar loadProveedores={loadProveedores} />
            <div className="container">
                <div className="row">
                    {emprendedores ?
                        emprendedores.map((emprendedor) => (
                            <Card key={emprendedor._id} data={emprendedor} />
                        )) : <Spinner />}
                </div>
            </div>
        </>
    );
};

export default Home;

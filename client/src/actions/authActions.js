import { types } from '../types/types';
import Axios from 'axios';

export const login = ({ email, password }) => {
    return async (dispatch) => {
        const cliente = { email, password };
        await Axios.post('user/login', cliente)
            .then((respuesta) => {
                const auth = respuesta.data.auth;
                if (!auth) {
                    console.log(respuesta.data.mensaje);
                } else {
                    const data = {
                        token: respuesta.data.token,
                        id: respuesta.data.usuario._id,
                        nombre: respuesta.data.usuario.nombre,
                    };
                    
                    dispatch({
                        type: types.login,
                        payload: data,
                    });
                    console.log(respuesta.data.mensaje);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};


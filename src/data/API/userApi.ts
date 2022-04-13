import axios from 'axios';
import { BackendUrl } from './settings';

axios.defaults.withCredentials = true;


const getUsersApi = async () => {
    return await axios.get(`${BackendUrl}/user`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const userCreateApi = async (email: string, firstName: string, lastName: string, password: string) => {
    return await axios
        .post(`${BackendUrl}/user`, {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
};


const getUserByIdApi = async (id: string) => {
    return await axios.get(`${BackendUrl}/user/${id}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const editCategoryApi = async (id: string, firstName: string, lastName: string, password: string) => {
    return await axios
        .put(`${BackendUrl}/user/${id}`, {
            firstName: firstName,
            lastName: lastName,
            password: password
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}

const deleteUserApi = async (id: string) => {
    return await axios.delete(`${BackendUrl}/user/${id}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

export const usersService = {
    getUsersApi,
    userCreateApi,
    getUserByIdApi,
    editCategoryApi,
    deleteUserApi
};

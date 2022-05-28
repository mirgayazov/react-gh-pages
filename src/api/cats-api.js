import axios from "axios";

export const server = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
        'x-api-key': '45098929-a3de-4030-b28c-177b210d0801',
    },
});

let page = 0;

export const catsAPI = {
    getCats() {
        return server.get(`/images/search?size=${'med'}&page=${page++}&limit=${15}&order=ASC`)
    },
};

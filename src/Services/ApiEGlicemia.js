//Importa a biblioteca Axios
import axios from 'axios';

//Cria uma conexão Axios com a URL base o que está na API da EGlicemia no Heroku
const ApiEGlicemia = axios.create({
    baseURL: process.env.REACT_APP_API_EGLICEMIA,
});

export default ApiEGlicemia;
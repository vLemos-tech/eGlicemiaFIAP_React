/**
 * Objeto que junta todos as Sagas que usaremos no aplicativo
 */
//Importa o all  do redux-saga
import { all } from 'redux-saga/effects';

//Importa o saga dentro do modulo busInfo
import glicemiaInfo from './glicemia/sagas.js';

//Junta todos os sagas importados
export default function* rootSaga() {
    return yield all([glicemiaInfo]);
}
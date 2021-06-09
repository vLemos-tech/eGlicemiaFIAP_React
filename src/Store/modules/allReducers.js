/**
 * Objeto que junta todos os Reducers que usaremos no aplicativo
 */

// Importa o combineReducers  do redux
import { combineReducers } from 'redux';

//importa o reducer que está no modulo busInfo
import glicemiaInfo from './glicemia/reducer';

//Junta os reducers
export default combineReducers({ glicemiaInfo });

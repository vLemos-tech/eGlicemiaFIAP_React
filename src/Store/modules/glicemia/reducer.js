/**
 * Objeto que organiza o reducer do módulo de controle de glicemias
 */

//Importa a função produce do immer
import produce from 'immer';

//Seta o state inicial
const INITIAL_STATE = {
    userID: '2',
    userName: 'Benedita Guimarães',
    userEmail: 'benedita.guimaraes@teste.com',
    loadedList: false,
    searchGlicemiasWithSuccess: 0,
    glicemiaList: []
}

export default function busInfo(state = INITIAL_STATE, { type, payload }) {

    return produce(state, (draft) => {

        switch (type) {
            case 'glicemia/SEARCH_GLICEMIA_START': {
                // Altera os estados do sistemas para mostrar que está buscando
                draft.loadedList = false;
                draft.glicemiaList = [];
                break;
            }
            case 'glicemia/SEARCH_GLICEMIA_FINISH_SUCCESS': {
                // Altera os estados do sistemas para mostrar que a busca foi finalizada com sucesso
                draft.loadedList = true;
                draft.searchGlicemiasWithSuccess = 1;
                draft.glicemiaList = payload.glicemiaList;
                break;
            }
            case 'glicemia/SEARCH_GLICEMIA_FINISH_ERROR': {
                // Altera os estados do sistemas para mostrar que a busca foi finalizada com erros
                draft.loadedList = true;
                draft.searchGlicemiasWithSuccess = -1;
                draft.glicemiaList = [];
                break;
            }
            default:
        }

    });

}
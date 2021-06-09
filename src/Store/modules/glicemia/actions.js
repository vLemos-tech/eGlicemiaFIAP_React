/**
 * Objeto que reúne os Actions que alteram as informações sobre Glicemia
 */


//Função que inicia a busca de informações sobre glicemia
export function searchGlicemiaStart() {
    //Retorna o Redux Action glicemia/SEARCH_GLICEMIA_START
    return {
        type: 'glicemia/SEARCH_GLICEMIA_START',
    };
}

// Função que adiciona o Saga para buscar a lista de Glicemias
export function searchGlicemiaList() {
    //Retorna o Redux Action glicemia/SEARCH_GLICEMIAS para chamar o Saga
    return {
        type: 'glicemia/SEARCH_GLICEMIAS',
    };
}

// Função que adiciona Action Finish Success na busca de Glicemias
export function searchGlicemiasFinishSuccess(glicemiaList) {
    // Retorna o Redux Action glicemia/SEARCH_GLICEMIAS_FINISH_SUCCESS
    return {
        type: 'glicemia/SEARCH_GLICEMIA_FINISH_SUCCESS',
        payload: { glicemiaList },
    };
}

//Função que adiciona Action Finish Error no Search Glicemias
export function searchGlicemiasFinishError() {
    //Retorna o Redux Action busInfo/SEARCH_BUSLINES_FINISH_ERROR
    return {
        type: 'glicemia/SEARCH_GLICEMIA_FINISH_ERROR',
    };
}

// Função que deleta a informação de glicemia
export function deleteGlicemiaInfo(infoID) {
    //Retorna o Redux Action glicemia/DELETE_INFO
    //para chamar o Saga
    return {
        type: 'glicemia/DELETE_GLICEMIA_INFO',
        payload: { infoID }
    };
}

// Função que adiciona a informação de glicemia
export function addGlicemiaInfo(dateTime, value) {
    //Retorna o Redux Action glicemia/DELETE_INFO para chamar o Saga
    return {
        type: 'glicemia/ADD_GLICEMIA_INFO',
        payload: { dateTime, value  }
    };
}
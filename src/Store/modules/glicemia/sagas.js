/**
 * Objeto que reúne as sagas deste módulo
 */
//Importa os effects do Redux-Saga
import { takeLatest, call, put, all, select } from "redux-saga/effects";
import ApiEGlicemia from "../../../Services/ApiEGlicemia";

// Importa as funções Actions que serão chamadas pelo Saga
import {
  searchGlicemiaStart,
  searchGlicemiasFinishSuccess,
  searchGlicemiasFinishError,
} from "./actions";

// Saga responsável por Buscar a informação e alterar o Reducer
function* getGlicemiaList() {
  try {
    console.log("Start Connection search");
    //Envia o Redux action que iniciou a conexão
    yield put(searchGlicemiaStart());

    //Realiza a conexão para buscar as glicemias
    const returnSearch = yield call(ApiEGlicemia.get, "/glicemias");

    //Verificar se o retorno é um array, se sim, volta sucesso
    if (returnSearch.data instanceof Array) {
      console.log("Success Call");
      yield put(searchGlicemiasFinishSuccess(returnSearch.data));
    } else {
      console.log("NOT SUCCESS");
      yield put(searchGlicemiasFinishError());
    }
  } catch (err) {
    console.log("Error Call");
    yield put(searchGlicemiasFinishError());
  }
}

// Saga responsável por deletar a informação e atualizar a lista
function* deleteGlicemiaInfo({ payload }) {
  try {
    //Obtendo a variável infoID do payload
    const { infoID } = payload;

    console.log("Start Connection to delete");
    //Envia o Redux action que iniciou a conexão
    yield put(searchGlicemiaStart());

    //Realiza a conexão para deletar as glicemias
    const returnDelete = yield call(
      ApiEGlicemia.delete,
      "/glicemias/" + infoID
    );
    console.log(returnDelete);
    if (returnDelete instanceof Object) {
      console.log("Delete succeed");
    } else {
      console.log("Delete Fail");
    }

    //Realiza a conexão para buscar as linhas
    const returnSearch = yield call(ApiEGlicemia.get, "/glicemias");
    console.log(returnSearch);

    //Verificar se o retorno é um array, se sim, volta sucesso
    if (returnSearch.data instanceof Array) {
      console.log("Success Call");
      yield put(searchGlicemiasFinishSuccess(returnSearch.data));
    } else {
      console.log("NOT SUCCESS");
      yield put(searchGlicemiasFinishError());
    }
  } catch (err) {
    //console.log(err);
    console.log("Error Call");
    yield put(searchGlicemiasFinishError());
  }
}

// Saga responsável pela registro de glicemia e atualização da lista
function* addGlicemiaInfo({ payload }) {
  try {
    console.log(payload)
    //Obtendo as variáveis necessárias do payload
    const { dateTime, value } = payload;
    //Obtendo a informação do usuário
    let userID = yield select(state => state.glicemiaInfo.userID);

    console.log("Start Connection to add glicemia info");
    //Envia o Redux action que iniciou a conexão
    yield put(searchGlicemiaStart());

    //Realiza a conexão para adicionar registro
    let user = {id: userID}
    let dataRequest = { "data": dateTime, "valor": value, "usuario": user};
    console.log(dataRequest)
    const returnDelete = yield call(
      ApiEGlicemia.post,
      "/glicemias",
      dataRequest
    );
    console.log(returnDelete);
    if (returnDelete instanceof Object) {
      console.log("Registration succeed");
    } else {
      console.log("Registration Fail");
    }

    //Realiza a conexão para buscar as glicemias
    const returnSearch = yield call(ApiEGlicemia.get, "/glicemias");
    console.log(returnSearch);

    //Verificar se o retorno é um array, se sim, volta sucesso
    if (returnSearch.data instanceof Array) {
      console.log("Success Call");
      yield put(searchGlicemiasFinishSuccess(returnSearch.data));
    } else {
      console.log("NOT SUCCESS");
      yield put(searchGlicemiasFinishError());
    }
  } catch (err) {
    //console.log(err);
    console.log("Error Call");
    yield put(searchGlicemiasFinishError());
  }
}

//Junta todos as sagas deste objeto
export default all([
  takeLatest("glicemia/SEARCH_GLICEMIAS", getGlicemiaList),
  takeLatest("glicemia/DELETE_GLICEMIA_INFO", deleteGlicemiaInfo),
  takeLatest("glicemia/ADD_GLICEMIA_INFO", addGlicemiaInfo),
]);

import React, { useState, useEffect } from "react";

import { searchGlicemiaList, deleteGlicemiaInfo, addGlicemiaInfo } from "../../Store/modules/glicemia/actions";
import { useDispatch, useSelector } from "react-redux";

import GlicemiaListView from "./GlicemiaListView";
import RegisterModal from "../RegisterModal/RegisterModal";

// Controlador do CRUD de glicemias 
const GlicemiaListController = () => {
  
  // Criando controle para exibição do modal
  const [show, setShow] = useState(false);
  // Buscando as variaveis do Reducer
  const glicemiaList = useSelector((state) => state.glicemiaInfo.glicemiaList);
  const loadedList = useSelector((state) => state.glicemiaInfo.loadedList);
  const searchGlicemiasWithSuccess = useSelector(
    (state) => state.glicemiaInfo.searchGlicemiasWithSuccess
  );
  
  // Funções de controle do modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Inicia o dispatch
  const dispatch = useDispatch();

  // Realiza a busca de registros de glicemia na montagem do componente
  useEffect(() => {
    // Saga
    dispatch(searchGlicemiaList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Função que será chamada para deletar Glicemia
  const deleteInfo = (infoID) => {
    // Saga
    dispatch(deleteGlicemiaInfo(infoID));
  };

  // Função que será chamada para adicionar Glicemia
  const addInfo = (dateTime, value) => {
    // Saga
    dispatch(addGlicemiaInfo(dateTime, value));
  };

  // Retorna um grupo composto pelo componente de listagem e o modal de criação de registro
  return (
    <>
      <GlicemiaListView
        glicemiaList={glicemiaList}
        loadedList={loadedList}
        searchGlicemiasWithSuccess={searchGlicemiasWithSuccess}
        modalShow={handleShow}
        deleteInfo={deleteInfo}
      />
      <RegisterModal show={show} handleClose={handleClose} addInfo={addInfo}/>
    </>
  );
};

export default GlicemiaListController;

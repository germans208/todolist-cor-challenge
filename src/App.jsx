import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //Contiene todo el estado de la app
import Main from './layout/Main';
import orderBy from 'lodash/orderBy';

//Valor por defecto cuando se inicia, tiene una lista Vacia
const initialValue = {
    items: []
};

const reducer = (state = initialValue, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] }
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(i => i.id !== action.payload) }
        case 'EDIT_ITEM':
            const editData = state.items.map(i => (i.id === action.payload.id ?
                { ...i, priority: action.payload.priority, status: action.payload.status } : i));
            return { ...state, items: editData }
        case 'FILTER_ALL':
            return { ...state, items: state.items }
        case 'FILTER_BY_STATUS':
            //TODO - NO FUNCIONA CUANDO QUIERO VOLVER A TRAER EL FILTRO, BORRA EL STATE
            return { ...state, items: state.items.filter(i => i.status === action.payload) }
        case 'FILTER_BY_PRIORITY':
            return { ...state, items: state.items.filter(i => i.priority === action.payload) }
        case 'ORDER_BY_STATUS':
            const order = orderBy(state.items, ['status'], [action.payload]);
            return { ...state, items: order }
        default:
            return state
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//Guarda el estado global dentro de la aplicación
//Guarda los estados que nosotros le indicamos
//Siempre en base a los action creators 

const App = () => {
    return (
        <Provider store={store} >
            <Main />
        </Provider>
    );
}

export default App;
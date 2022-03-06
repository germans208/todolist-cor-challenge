import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //Contiene todo el estado de la app
import Main from './layout/Main';

//Valor por defecto cuando se inicia, tiene una lista Vacia
const initialValue = {
    items: []
};

const reducer = (state = initialValue, action) => {
    
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] }
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(i => i.value !== action.payload) }
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
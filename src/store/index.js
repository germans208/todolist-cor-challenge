import { createStore } from 'redux';

import reducer from '../reducer';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//Guarda el estado global dentro de la aplicación
//Guarda los estados que nosotros le indicamos
//Siempre en base a los action creators 

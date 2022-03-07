import React from 'react';
import { Provider } from 'react-redux'; //Contiene todo el estado de la app
import Main from './layout/Main';
import { store } from './store';

const App = () => {
    return (
        <Provider store={store} >
            <Main />
        </Provider>
    );
}

export default App;
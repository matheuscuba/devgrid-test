import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {Store, persistor} from './store';
import {PersistGate} from 'redux-persist/lib/integration/react';

// ReactDOM.render(
//     <Provider store={Store}>
//       <App />
//     </Provider>
//   , document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

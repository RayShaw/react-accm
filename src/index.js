import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from  './store/configureStore';


const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render(<App store={store} />, root);

registerServiceWorker();

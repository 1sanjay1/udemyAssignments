import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';

const store = {
    counter : 0
};

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

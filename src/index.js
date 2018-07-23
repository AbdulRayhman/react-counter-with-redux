import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,combineReducers } from 'redux';
import { Provider} from 'react-redux';
import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/results';
const rootReducer = combineReducers({
    ctr: counterReducer,
    res:resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

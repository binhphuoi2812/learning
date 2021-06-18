import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './Redux/reducers/rootReducer';
import SimpleCount from './container/simpleCount';
import ListPersonComponent from './hookChildComponents/listPerson';
import useMemoComponent from './views/useMemoComponent';
// import './List.css'

const store = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      {/* <SimpleCount></SimpleCount> */}
      {/* <ListPersonComponent></ListPersonComponent> */}
      {/* <useMemoComponent></useMemoComponent> */}

      <App />
    </Provider>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

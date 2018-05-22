import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyComponent
    title="My Componet"
    content="これはオリジナルコンポネントのサンプルです。"
  />,
  document.getElementById('root')
);
registerServiceWorker();

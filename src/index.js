import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {HashRouter as Router} from 'react-router-dom';
import './i18next';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={(<div> </div>)} >
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


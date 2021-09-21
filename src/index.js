import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import RealmApp from "./providers/realm"
import MongoDB from "./providers/mongodb"

ReactDOM.render(
  <React.StrictMode>
      <RealmApp>
          <MongoDB>
              <App />
          </MongoDB>
      </RealmApp>
  </React.StrictMode>,
  document.getElementById('root')
);

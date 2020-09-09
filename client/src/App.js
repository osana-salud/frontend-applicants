import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
            <Route
            path='/'
            component={Dashboard}
          />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

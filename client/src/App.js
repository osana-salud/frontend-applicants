import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import DashboardAdmin from './components/DashboardAdmin'


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
            <Route
            path='/'
            component={DashboardAdmin}
          />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

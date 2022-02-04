import React from 'react';
import { Provider } from 'react-redux';
import AuthRouter from './routes/AuthRouter';
import { store } from './store/store';

const App = () => {
    return (
        <Provider store={store}>
          <AuthRouter/>
        </Provider>
    );
};

export default App;

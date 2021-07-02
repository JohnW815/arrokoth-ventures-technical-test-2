import React from 'react'
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getReduxStore, getRrfProp } from "./Config/firebase-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase"

import Header from './Layout/Homepage/Header/Header';
import Main from './Layout/Homepage/Main/Main'

function App() {
  return (
    <div className="App">
        <Provider store={getReduxStore()}>
            <ReactReduxFirebaseProvider {...getRrfProp()}>
                <Router>
                    <Header />
                    <Main />
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>
    </div>
  );
}

export default App;

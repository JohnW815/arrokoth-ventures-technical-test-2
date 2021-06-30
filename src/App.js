import './App.css';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getReduxStore, getRrfProp } from "./Config/firebase-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase"

import Header from './Components/Header/Header';
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="App">
        <Provider store={getReduxStore()}>
            <ReactReduxFirebaseProvider {...getRrfProp()}>
                <Header />
                <Main />
            </ReactReduxFirebaseProvider>
        </Provider>
    </div>
  );
}

export default App;

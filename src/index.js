import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import ReactForm from './components/ReactForm';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
import { startSetListAction } from './actions/listAction';
import { login, logout } from './actions/authAction';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase';
//
//ReactDOM.render(<ReactForm />, document.getElementById('root'));
// new starts
const store = configureStore();


// loading database


    const jsx = (

        <Provider store={store}>
            <AppRouter />
        </Provider>
    );


    ReactDOM.render(<p>Loading ... </p>, document.getElementById('root'));

    let hasRendered = false;

    const renderApp = () => {
        if (!hasRendered) {

            ReactDOM.render(jsx, document.getElementById('root'));
            hasRendered = true;
        }
    };

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('login'+user.uid);
            store.dispatch(login(user.uid));
            console.log(store.getState());
            store.dispatch(startSetListAction()).then(() => {
             
                
                renderApp();

                
                if (history.location.pathname === '/') {
                    history.push('/reactform');

                }
                
            });
            
      
        } else {
            console.log('logout');
            store.dispatch(logout());
            renderApp();
            history.push('/');
        }
    });


   // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();

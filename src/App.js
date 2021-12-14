import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Store } from './Configs';

export default function App() {
   

    return (
        <Provider store={Store}>
            <NavigationContainer theme={DefaultTheme}>
                <Router />
            </NavigationContainer>
        </Provider>
    );
}
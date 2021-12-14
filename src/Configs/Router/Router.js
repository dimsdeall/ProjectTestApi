import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Login } from '../..';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}



const Router = () => {
    const { login } = useSelector(state => state.GlobalReducer)
    return (
        (login) ?
            <Tab.Navigator>
                <Tab.Screen name="Homes" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
            :
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }}/>
            </Stack.Navigator>
    )
}

export default Router

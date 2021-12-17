import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Account, Home, Login, SplashScreen } from '../..';
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import { retrieveUserSession } from '../Redux/Action/GlobalAction';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Router = () => {
    const { login, Splash } = useSelector(state => state.GlobalReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(retrieveUserSession(), dispatch)
    }, [dispatch])

    if (Splash) {
        return <SplashScreen/>;
    }


    console.log({ 'user login': login });
    return (
        (login) ?
            <Tab.Navigator
                tabBarPosition='bottom'
                // tabbar={h}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = faHome
                        } else if (route.name === 'Account') {
                            iconName = faUserCircle;
                        }

                        return <FontAwesomeIcon icon={iconName} size={20} color={color} />
                    },
                    tabBarActiveTintColor: '#14A39A',
                    tabBarInactiveTintColor: 'gray',
                    swipeEnabled: true,
                    tabBarIconStyle: styles.iconTab,
                    tabBarLabelStyle: styles.textTab,
                    tabBarPressColor: '#14A39A',
                    keyboardDismissMode: 'none',
                    // tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
            :
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
            </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    iconTab: {
        height: 20,
        margin: 0,
        padding: 0
    },
    textTab: {
        height: 9,
        fontSize: 7,
        margin: 0,
        padding: 0

    }
})

export default Router

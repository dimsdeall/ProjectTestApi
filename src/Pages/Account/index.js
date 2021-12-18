import React from 'react'
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { USerDescription, UserProfile } from '../../Components'
import { Logout } from '../../Configs/Redux/Action/GlobalAction'
import { exit } from '../../utils'

export default function Account() {
    const { UserSession } = useSelector(state => state.GlobalReducer)
    const dispatch = useDispatch()

    
    let Session = []
    try {
        Session = JSON.parse(UserSession);
    } catch (error) {
        Session = JSON.parse(JSON.stringify(UserSession));
    }
    
    const Submit = () => {
        dispatch({ type: 'SPLASH_CHANGE', payload: true })
        dispatch(Logout(), dispatch)
    }

    BackHandler.addEventListener("hardwareBackPress", ()=> exit())
    return (
        <View style={styles.layout}>
            <UserProfile image={Session.avatar} username={Session.username} />
            <USerDescription email={Session.email} role={Session.role.description} Submit={() => Submit()} />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'azure'
    }
})
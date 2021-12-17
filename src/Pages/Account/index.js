import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfile } from '../../Components'
import { Logout } from '../../Configs/Redux/Action/GlobalAction'

export default function Account() {
    const {UserSession} = useSelector(state => state.GlobalReducer)
    const dispatch = useDispatch()


    const Submit = () => {
        dispatch({ type: 'SPLASH_CHANGE', payload: true })
        dispatch(Logout(), dispatch)
    }

    console.log(UserSession);
    return (
        <View>
            <Button title='logout' onPress={() => Submit()} />
            <UserProfile />
        </View>
    )
}

const styles = StyleSheet.create({})
import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.text}>Loading</Text>
                <ActivityIndicator color={'white'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#12938b',
        flex: 1
    },
    container: {
        // backgroundColor: 'tomato'
    },
    text:{
        fontSize:30,
        color:'white',
        alignSelf:'center'
    }
})


import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.layout}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../Assets/Icon/photo-camera.png')} />
                <Text style={styles.text}>Loading</Text>
                <ActivityIndicator color={'white'} size={15} />
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
    text: {
        // fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        paddingBottom: 30
    },
    image:{
        height:50,
        width:50,
        alignSelf:'center'
    }
})

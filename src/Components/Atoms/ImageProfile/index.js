import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ImageProfile(props) {
    const styles =(width, height) =>{
        return {
            width,
            height,
            borderRadius:width/2
        }
    }
    return (
        <View>
            <Image style={styles(props.height,props.width)} source={require('../../../Assets/Icon/logo.png')} />
        </View>
    )
}


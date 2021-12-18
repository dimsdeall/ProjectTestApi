import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ImageProfile, LabelAccount } from '../..'

export default function UserProfile(props) {
    return (
        <View style={styles.container}>
            <ImageProfile height={100} width={100} image={props.image} />
            <LabelAccount text={props.username} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex:3,
        padding:30
    }
})

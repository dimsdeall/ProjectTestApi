import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageProfile, LabelAccount } from '../..'

export default function UserProfile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <ImageProfile height={100} width={100} />
                <LabelAccount text='Username' />
            </View>
            <View style={styles.description}>
                <LabelAccount text="Email :" />
                <LabelAccount text="Role Description :"/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        display:'flex'
    },  
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow:1
    },
    description:{
        backgroundColor:'gray',
        flexGrow:4,
        padding:20,
        marginHorizontal:20,
        borderRadius:10,
        marginBottom:20
    }
})

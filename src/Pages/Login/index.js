import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BtnComponent, InputGroup } from '../../Components'

const Login = () => {
    return (
        <SafeAreaView style={styles.layout}>
            <Text style={styles.textBaner}>Judul Aplikasi</Text>
            <View style={styles.wrapper}>
                <InputGroup text='Email' />
                <InputGroup text='Password' password={true} />
                <BtnComponent text='LOGIN' onPress={() => alert('ok')} />
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    }, wrapper: {
        display: 'flex',
        backgroundColor: 'gray',
        marginHorizontal: 10,
        paddingTop: 30,
        paddingBottom: 20,
        borderRadius: 5
    }, textBaner: {
        fontSize: 20,
        paddingBottom: 20,
        alignSelf: 'center'
    }
})

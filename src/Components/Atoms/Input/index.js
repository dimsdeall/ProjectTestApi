import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function Input(props) {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                secureTextEntry={props.password}
                placeholder={props.placeholder}
                placeholderTextColor={'#71BEB9'}
                ref={props.refs}
                onSubmitEditing={() => props.onSubmit()}
                onChangeText={text => props.onChange(text)}
                value={props.value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin:10,
        flex:7
    }, input: {
        fontSize:16,
        padding: 2,
        color: 'white',
        borderBottomColor: '#bafffb',
        borderBottomWidth: 1,
        width:'100%'
    }
})

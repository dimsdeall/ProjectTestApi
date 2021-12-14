import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Label } from '../..'

export default function InputGroup(props) {
    return (
        <View style={styles.wrapper}>
            <Label text={props.text} />
            <Input password={props.password} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: 'green',
        marginHorizontal: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

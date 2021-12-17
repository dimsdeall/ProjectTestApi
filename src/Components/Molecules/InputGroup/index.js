import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Label } from '../..'

export default function InputGroup(props) {
    return (
        <View style={styles.wrapper}>
            <Label text={props.text} />
            <Input
                password={props.password}
                placeholder={props.placeholder}
                onChange={props.onChange}
                refs={props.refs}
                onSubmit={props.onSubmit}
                value={props.value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

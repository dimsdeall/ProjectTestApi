import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Label(props) {
    return (
        <View style={styles.wrapper}>
            <Text
                style={styles.text}
            >{props.text}</Text>
            <Text
                style={styles.text}
            >
                :
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // width:'30%',
        flex: 3,
        paddingLeft: 10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text: {
        fontSize: 16,
        color: 'white',
    }
})

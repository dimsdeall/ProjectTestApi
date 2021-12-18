import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BtnComponent, Label } from '../..'

export default function USerDescription(props) {
    return (
        <View style={styles.layout}>
            <View style={styles.Description}>
                <View style={styles.viewDescription}>
                    <Label text="Email" />
                    <Text style={styles.Txt}>{props.email}</Text>
                </View>
                <View style={styles.viewDescription}>
                    <Label text="Role Description" />
                    <Text style={styles.Txt}>{props.role}</Text>
                </View>
            </View>
            <View style={styles.Btn}>
                <BtnComponent text='LOGOUT' onPress={() => props.Submit()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#14A39A',
        // padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        flexGrow: 9,
        display: 'flex',
        justifyContent: 'space-between'
    },
    Description: {
        display: 'flex',
        flex: 4
    },
    viewDescription: {
        margin:10,
        // backgroundColor:'red',
        display:'flex',
        flexDirection:'row'
    },
    Txt:{
        flex:4,
        fontSize: 16,
        color: 'white',
        marginLeft:5
    },
    Btn: {
        flex: 1
    }
})

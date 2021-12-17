import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

export default function InputSearch(props) {
    const [SText, setSText] = useState('')
    return (
        <View style={styles.layout}>
            <TextInput style={styles.input}
                onChangeText={text => setSText(text)}
                returnKeyType='search'
                onSubmitEditing={() => props.onChange(SText)}
                placeholderTextColor={'#71BEB9'}
                placeholder='Cari Gambar dari API Unsplash'
            />
            <FontAwesomeIcon style={styles.icon}  icon={faSearch} size={20} color='#71BEB9' />
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        padding: 10,
    },
    input: {
        backgroundColor: '#12938b',
        fontSize: 15,
        borderRadius: 10,
        paddingLeft: 50,
        flexGrow:1,
        color:'#bafffb',
        height:40,
    },
    icon:{
        position:'absolute',
        marginLeft:20,
        marginTop:20
    }
})

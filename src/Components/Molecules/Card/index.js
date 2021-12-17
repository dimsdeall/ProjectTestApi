import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    console.log(props.item);
    return (
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <Image style={styles.image} source={{ uri: props.item.urls.small }} />
            </View>
            <View style={styles.cardTitle}>
                <Image style={styles.imageProfile} source={{ uri: props.item.user.profile_image.small }} />
                <Text style={styles.cardTitleText}>{props.item.user.name}</Text>
            </View>
            <Text>{props.item.alt_description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius:10,
        display: 'flex'
    },
    cardTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 5,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255, 0.7)',
        borderRadius:10

    },
    cardTitleText:{
        color:'black',
        paddingLeft:10,
        // fontWeight:'bold'
    },
    cardBody: {
        height: 200,
        borderRadius:10
    },
    image: {
        height: '100%'
    },
    imageProfile: {
        height: 30,
        width: 30,
        borderRadius: 15
    }
})

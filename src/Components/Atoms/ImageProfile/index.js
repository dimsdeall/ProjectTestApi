import React from 'react'
import { Image, View } from 'react-native'

export default function ImageProfile(props) {
    const styles = (width, height) => {
        return {
            width,
            height,
            borderRadius: width / 2,
            // borderColor: '#14A39A',
            borderColor: 'cyan',
            borderWidth: 2
        }
    }
    return (
        <View style={{ paddingBottom: 5 }}>
            <Image style={styles(props.height, props.width)} source={{ uri: `https://dashboard.nyonyaa.com/${props.image}` }} />
        </View>
    )
}


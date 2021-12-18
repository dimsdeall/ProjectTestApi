import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function Render(props) {
    // console.log(((props.data % 10 === 0)));
    return (
        <View>
            {(props.data % 10 === 0) ?
                <ActivityIndicator style={styles.act} size={'large'} color={'#14A39A'} />
                : null

            }
        </View>
    )
}

const styles = StyleSheet.create({
    act: {
        alignItems: 'center'
    }
})

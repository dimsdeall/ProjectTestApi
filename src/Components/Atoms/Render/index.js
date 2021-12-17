import { faLevelUpAlt, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function Render(props) {
    return (
        <View>
            {
                (props.data == 0) ?
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.text}>Mulai lakukan pencarian di kolom atas</Text>
                            <FontAwesomeIcon icon={faLevelUpAlt} color='gray' size={20} />
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.text}>Geser ke kanan untuk lihat profile</Text>
                            <FontAwesomeIcon icon={faLongArrowAltRight} color='gray' size={20} />
                        </View>
                    </View>
                    :
                    <ActivityIndicator style={styles.act} size={'large'} color={'#000000'} />

            }


        </View>
    )
}

const styles = StyleSheet.create({
    act: {
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom:70
    },
    text: {
        paddingRight: 10,
        color: 'gray',
        fontSize: 15
    }
})

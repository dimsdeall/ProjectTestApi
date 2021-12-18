import { faAngleDoubleDown, faLevelUpAlt, faLongArrowAltRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeFirst(props) {
    return (
        <View>
            {
                (props.status === 1) ?
                    <View>
                        <View style={styles.wrapper}>
                            <View style={styles.view}>
                                <Text style={styles.text}>Mulai lakukan pencarian di kolom atas</Text>
                                <FontAwesomeIcon icon={faLevelUpAlt} color='#14A39A' size={20} />
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.view}>

                                <Text style={styles.text}>Geser ke kanan untuk lihat profile</Text>
                                <FontAwesomeIcon icon={faLongArrowAltRight} color='#14A39A' size={20} />
                            </View>
                        </View>
                        <View style={styles.wrapper}>

                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.view}>

                                <FontAwesomeIcon icon={faAngleDoubleDown} color='#14A39A' size={20} />
                                <Text style={styles.text}>Infinte Scroll setiap 10 gambar</Text>
                                <FontAwesomeIcon icon={faAngleDoubleDown} color='#14A39A' size={20} />
                            </View>
                        </View>
                    </View>
                    :
                    <View>
                        <View style={styles.wrapper}>
                            <View style={styles.view}>

                                <Text style={styles.text}>Data tidak ditemukan</Text>
                                <FontAwesomeIcon icon={faTimesCircle} color='#14A39A' size={20} />
                            </View>
                        </View>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 70,
        // backgroundColor: 'white',

    },
    text: {
        paddingHorizontal: 10,
        color: '#14A39A',
        fontSize: 15
    },
    view: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#14A39A',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 5
    }
})

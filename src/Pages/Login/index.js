import React, { useRef, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { BtnComponent, InputGroup } from '../../Components'
import { loginAPI } from '../../Configs/Redux/Action/GlobalAction'

const Login = ({ navigate }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const { validLogin } = useSelector(state => state.GlobalReducer)
    // const [Email, setEmail] = useState('testing@nyonyaa.com')
    // const [Password, setPassword] = useState('Ny0ny4')
    const user = useRef();
    const pass = useRef();
    const dispatch = useDispatch()


    const submit = () => {
        dispatch({ type: 'SPLASH_CHANGE', payload: true })
        dispatch(loginAPI({ Email, Password }), dispatch)
    }
    return (
        <SafeAreaView style={styles.layout}>
            <Image style={styles.image} source={require('../../Assets/Icon/photo-camera.png')} />
            <Text style={styles.textBaner}>Unsplash Nyonyaa API</Text>
            <View style={styles.wrapper}>
                {
                    (validLogin) ?
                        <Text style={styles.text}>*Username dan password tidak sesuai</Text>
                        : null
                }
                <InputGroup
                    text='Email'
                    placeholder='test@example.com'
                    value={Email}
                    onChange={setEmail}
                    refs={user}
                    onSubmit={() => pass.current.focus()}
                />
                <InputGroup
                    text='Password'
                    placeholder='secret text'
                    password={true}
                    value={Password}
                    onChange={setPassword}
                    refs={pass}
                    onSubmit={() => submit()}
                />
                <BtnComponent text='LOGIN' onPress={() => submit()} />
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#12938b'
    }, wrapper: {
        display: 'flex',
        backgroundColor: 'rgba(65, 168, 162, 0.7)',
        marginHorizontal: 10,
        paddingTop: 30,
        paddingBottom: 20,
        borderRadius: 15
    }, textBaner: {
        fontSize: 20,
        paddingBottom: 20,
        alignSelf: 'center',
        color: 'white'

    },
    text: {
        color: 'red',
        alignSelf: 'center',
        backgroundColor: 'rgba(65, 168, 162, 1)',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10
    },
    image:{
        height:100,
        width:100,
        alignSelf:'center'
    }
})

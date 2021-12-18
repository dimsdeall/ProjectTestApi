import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import { ENDPOINT_DASHBOARD } from "@env"

export const retrieveUserSession = () => async (dispatch) => {
    try {
        const session = await EncryptedStorage.getItem("user_session");
        setTimeout(() => {

            if (session === null) {
                return dispatch({
                    type: 'LOGIN_CHANGE', payload: {
                        status: false,
                        UserSession: []
                    }
                })
            }

            return dispatch({
                type: 'LOGIN_CHANGE', payload: {
                    status: true,
                    UserSession: session
                }
            })
        }, 2000);
    } catch (error) {
        console.log(error);
    }
}

async function storeUserSession(data) {
    try {
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({
                token: data.token,
                username: data.username,
                email: data.email,
                role: data.role,
                avatar: data.avatar
            })
        );
    } catch (error) {
        console.log(error);
    }
}

export const loginAPI = (payload) => (dispatch) => {
    axios.post(ENDPOINT_DASHBOARD, {
        identifier: payload.Email,
        password: payload.Password
    })
        .then(res => {
            if (res.status === 200 && res.data.jwt !== undefined) {
                let data = res.data
                let UserSession = {
                    token: data.jwt,
                    username: data.user.username,
                    email: data.user.email,
                    role: data.user.role,
                    avatar: data.user.avatar.url
                }

                storeUserSession(UserSession)
                dispatch({ type: 'VALID_LOGIN', payload: false })
                return dispatch({
                    type: 'LOGIN_CHANGE', payload: {
                        status: true,
                        UserSession
                    }
                })
            } else {
                dispatch({ type: 'SPLASH_CHANGE', payload: false })
                return dispatch({ type: 'VALID_LOGIN', payload: true })
            }
        })
        .catch(err => {
            // console.log(err)
            dispatch({ type: 'SPLASH_CHANGE', payload: false })
            return dispatch({ type: 'VALID_LOGIN', payload: true })
        })
}


export const Logout = () => async (dispatch) => {
    try {
        await EncryptedStorage.clear();

        setTimeout(() => {
            return dispatch({
                type: 'LOGIN_CHANGE', payload: {
                    status: false,
                    UserSession: ''
                }
            })
        }, 2000);
    } catch (error) {
        console.log(error);
    }
}
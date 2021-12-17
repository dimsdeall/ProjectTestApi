import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import { ENDPOINT_DASHBOARD } from "@env"

export const retrieveUserSession = () => async (dispatch) => {
    try {
        const session = await EncryptedStorage.getItem("user_session");
        console.log(session);
        setTimeout(() => {

            if (session === null) {
                return dispatch({ type: 'LOGIN_CHANGE', payload: {
                    status: false,
                    UserSession: []
                } })
            }
            
            return dispatch({ type: 'LOGIN_CHANGE', payload: {
                status: true,
                UserSession: session
            } })
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
                    role: data.user.role,
                    avatar: data.user.avatar.url
                }

                storeUserSession(UserSession)

                return dispatch({ type: 'LOGIN_CHANGE', payload: {
                    status: true,
                    UserSession
                } })
            } else {
                console.log('fail');
            }
        })
        .catch(err => console.log(err))
}


export const Logout = () => async (dispatch) => {
    try {
        await EncryptedStorage.clear();

        setTimeout(() => {
            return dispatch({ type: 'LOGIN_CHANGE', payload: {
                status: false,
                UserSession: []
            } })
        }, 2000);
    } catch (error) {
        console.log(error);
    }
}
const initialState = {
    login: false,
    Splash: true,
    UserSession: '',
    validLogin: false,
}


const GlobalReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LOGIN_CHANGE":
            return {
                ...state,
                login: action.payload.status,
                UserSession: action.payload.UserSession,
                Splash: false
            }
        case "SPLASH_CHANGE":
            return {
                ...state,
                Splash: action.payload
            }
        case "VALID_LOGIN":
            return {
                ...state,
                validLogin: action.payload
            }
        default:
            return state
    }

}

export default GlobalReducer
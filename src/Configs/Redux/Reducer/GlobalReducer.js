const initialState = {
    endpoint: {
        dashboard: 'https://dashboard.nyonyaa.com/auth/local',
        unsplash : 'https://api.unsplash.com//search/photos'
    },
    key:'3btkseZJ8JmHVEk5-8yUv5FqN0zLhZhEjseWp1i05kA',
    login : false
}

const GlobalReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOGIN_CHANGE":
            return{
                ...state,
                login: action.payload
            }
        default:
            return state
    }

}

export default GlobalReducer
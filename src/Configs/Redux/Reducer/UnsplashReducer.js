
const initialState = {
    data: [],
    per_page: 10,
    page: 1,
    renderAPI: false
}

const UnsplashReducer = (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE_DATA":
            return {
                ...state,
                data: action.payload
            }
        case "ADD_PAGE":
            return {
                ...state,
                data: action.payload
            }
        case "RENDER_PAGE":
            return {
                ...state,
                renderAPI: action.payload
            }
        default:
            return state
    }

}

export default UnsplashReducer
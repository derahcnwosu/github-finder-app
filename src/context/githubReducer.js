const githubReducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_USERS': return {
            ...state,
            users: action.payload
        }
        case 'SET_LOADING_FALSE': return {
            ...state,
            loading: action.payload
        }
        case 'SET_LOADING_TRUE': return {
            ...state,
            loading: action.payload
        }
        case 'GET_USER_AND_REPOS': return {
            ...state,
            user: action.payload.user,
            repos: action.payload.repos
        }

        default: return state
    }
}

export default githubReducer    
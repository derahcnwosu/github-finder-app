import {createContext, useReducer} from 'react'
import githubReducer from './githubReducer'

const githubContext = createContext()


export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    return (
        <githubContext.Provider value={{
            ...state,
            dispatch

        }}>
            {children}
        </githubContext.Provider>
    )
}

export default githubContext
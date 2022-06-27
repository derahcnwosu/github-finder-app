import axios from "axios"

const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json'
    }
})


export const searchUsers = async(user) => {

    const params = new URLSearchParams({
        q:user
    })
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async(login) => {
    const params = new URLSearchParams({
        per_page: 10,
        sort: 'created_at'
    })
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
    ])
    return {user: user.data, repos: repos.data}
}


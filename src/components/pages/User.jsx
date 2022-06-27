import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getUserAndRepos} from '../../actions/githubActions'
import githubContext from '../../context/githubContext'
import {motion} from 'framer-motion'
import RepoList from '../RepoList'

function User() {
    const {dispatch, user, repos} = useContext(githubContext)
    const params = useParams()


    useEffect(() => {
        const getUserAndReposData = async() => {
            const userData = await getUserAndRepos(params.login)
            dispatch({
            type: 'GET_USER_AND_REPOS',
            payload: userData
        })
        }

        getUserAndReposData()
    }, [dispatch, params.login])
  return (
    <div className="user-page">
        <motion.img src={user.avatar_url} alt="" width= {200} className='user-img' 
            initial = {{opacity: 0, width: 50}}
            animate = {{opacity: 1, width: 200}}
            transition = {{delay: 1, type: 'spring', stiffness: 300}}
        
        />
        <motion.h3 
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 1, type: 'spring', stiffness: 300}}
        >
         {user.login}
        </motion.h3>

        <RepoList repos = {repos}/>
    </div>
  )
}

export default User
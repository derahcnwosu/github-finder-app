import React from 'react'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <>
        <h1 className='repo-head'>Latest Repositories</h1>
        <div className="repo-list">
            {repos.map((repo) => (
                <RepoItem key={repo.id} repo = {repo}/>
            ))}
        </div>
    </>
  )
}

export default RepoList
import React from 'react'
import {motion} from 'framer-motion'

function RepoItem({repo}) {
  return (
    <motion.div className="repo-item" 
        initial = {{opacity: 0,}}
        whileInView = {{opacity: 1}}
        transition = {{delay: 0.5, duration: 1}}
        viewport = {{once: true}}
    >
        <a href={repo.html_url} className = 'repo-link' target= '_blank' rel='noreferrer'>{repo.name}</a>
        <p>{repo.description}</p>
    </motion.div>
  )
}

export default RepoItem
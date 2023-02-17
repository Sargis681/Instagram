import React from 'react'

function Comments({ isShown, comments, open }) {
  return (
    <>
      {
        !!comments.length && (
          isShown ?
            comments.map(comment => (
              <p className="description" key={comment.id}><span>{comment.username} </span> {comment.body}</p>

            ))
            :
            <h1
              onClick={open}
              style={{ cursor: 'pointer' }}
            > Show All Comments</h1>)
      }
    </>
  )
}

export default Comments
import React from 'react'

const Comments = ({comments, setComments}) => {

  const deleteComment = (id) => {
    let newComments = [...comments].filter(comment => comment.id !== id);
    setComments(newComments);
  }
  
  console.log(comments[0])
  
	return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}
        style={{'backgroundColor': comments[0] ? 'yellow' : 'white'}}
        >
          <div>
            <strong>{comment.text}</strong>
            <small>{new Date().toLocaleDateString()}</small>
            <button onClick={() => deleteComment(comment.id)}>&times;</button>
          </div>
        </li>
      ))}
    </ul>	    
  )
}

export default Comments
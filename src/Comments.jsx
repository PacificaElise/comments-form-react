import React from 'react';
import "./styles.css";

const Comments = ({comments, setComments}) => {

  const deleteComment = (id) => {
    let newComments = [...comments].filter(comment => comment.id !== id);
    setComments(newComments);
  }
    
	return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}
        style={{'backgroundColor': (comment.id == comments[0].id) ? '#FBCEB1' : 'white'}}
        >
          <div className='comment'>
            <p><strong>{comment.text}</strong></p>
            <p><small>{new Date().toLocaleDateString()}</small></p>
            <button onClick={() => deleteComment(comment.id)}>&times;</button>
          </div>
        </li>
      ))}
    </ul>	    
  )
}

export default Comments
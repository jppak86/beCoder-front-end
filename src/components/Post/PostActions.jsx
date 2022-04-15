import React from 'react'
import { Link } from 'react-router-dom'
import '../Post/PostCard.css'

const PostActions = (props) => {
  const authorId = props.post.profile_id ? props.post.profile_id : props.post
  const isAuthor = props.user.id === authorId

  return (
    isAuthor &&
    <div className="interactions">
      {props.post.title &&
        <Link className='update-post'
          to='/edit'
          state={props.post}>
            <button>
              Update
            </button>
          </Link>
        }
        <button
          onClick={() => props.handleDeletePost (props.post.id)}
        >Delete</button>
    </div >
  )
}

export default PostActions
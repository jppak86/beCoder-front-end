import React from 'react'
import PostActions from './PostActions'
import '../Post/PostCard.css'
import CodeEditor from '../Code/CodeEditor'

const PostCard = (props) => {
  return (
    <div className="post-card">
    
      <div className="card-header">
        
        <p>Title: {props.post.title}</p>
      </div>

      <div className="question-container">
        <p>Q: {props.post.question}</p>
      </div>

      <div className="code-container">
        <p className='codeblock-header'>CodeBlock</p>
        <CodeEditor
          codeblock={props.post.code_block}
        ></CodeEditor>
      </div>

      <div className="review-container">
        <p>Explanation:<br/> {props.post.explanation}</p>
        <p>What I did well:<br/>{props.post.do_good}</p>
        <p>What I did bad: <br/>{props.post.do_bad}</p>
        <p>Next time: <br/>{props.post.do_next}</p>
        
      </div>

      <div className="comment-link">
      <PostActions {...props}/>
      </div>

    </div>
  )
}

export default PostCard
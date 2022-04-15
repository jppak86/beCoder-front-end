import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import '../CreatePost/Create.css'
// Components

import Header from '../../components/Header/Header'
import CodeEditor from '../../components/Code/CodeEditor'
//Services
import * as postService from '../../services/postService'

const EditPost = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [toggleCode, setToggleCode] = useState(false)
  // const [codeblock, setCodeblock] = useState(location.state)
  const [post, setPost] = useState(location.state)

  const formData = {
    title: post.title,
    question: post.question, // question input
    code_block: post.code_block, // codeblock input
    explanation: post.explanation,
    do_good: post.do_good,
    do_bad: post.do_bad,
    do_next: post.do_next,
    added_by: props.user.profile, // who created the post
  }

  const formElement = useRef();

  const handleChange = evt => {
    setPost({...post, [evt.target.name]: evt.target.value })
  }

  const handleEditPost = async (e) => {
    e.preventDefault()
    try {
      const editPost = await postService.updatePost(formData, post.id)
      console.log(editPost)
      navigate('/posts')
    } catch (error) {
      throw error
    }
    
  };

  return (
    <div className="layout">
      <Header />
      <form ref={formElement} className="create-form" onSubmit={handleEditPost}>

      <div className="question-prompt">
        <label>Enter your title</label>
      </div>

      <input
        required
        name="title"
        autoComplete='off'
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <div className="question-prompt">
        <label>Edit your question</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="question"
        autoComplete='off'
        placeholder="Question"
        value={formData.question}
        onChange={handleChange}
      />

      <div className="border"></div>

      <div className="code-prompt">
        <label>Codeblock</label>
        <button type="button" id="plus-button"
        onClick={() => setToggleCode(!toggleCode)}>+</button>
      </div>

      {toggleCode &&
        <CodeEditor
          codeblock={formData.code_block}
        ></CodeEditor>
      }
      <div className='question-prompt'>
        <label>Edit your code here!</label>
      </div>

      <textarea name="code_block" cols="60" rows="8" 
        autoComplete='off'
        value={formData.code_block}
        onChange={handleChange} 
      />

      <div className="border"></div>

      <div className="question-prompt">
        <label>Edit your explanation</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="explanation"
        autoComplete='off'
        placeholder="explanation"
        value={formData.explanation}
        onChange={handleChange}
      />

      <div className="border"></div>

      <div className="question-prompt">
        <label>Edit What I did well</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="do_good"
        autoComplete='off'
        placeholder="do_good"
        value={formData.do_good}
        onChange={handleChange}
      />

      <div className="border"></div>

      <div className="question-prompt">
        <label>Edit What I did bad</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="do_bad"
        autoComplete='off'
        placeholder="do_bad"
        value={formData.do_bad}
        onChange={handleChange}
      />

      <div className="border"></div>

      <div className="question-prompt">
        <label>Edit What I will do</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="do_next"
        autoComplete='off'
        placeholder="do_next"
        value={formData.do_next}
        onChange={handleChange}
      />



      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default EditPost
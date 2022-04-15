import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import '../CreatePost/Create.css'


// Components
import PostForm from './PostForm'
import Header from '../../components/Header/Header'

//Services
import { createPost } from '../../services/postService'

const CreatePost = (props) => {
  const navigate = useNavigate()
  const [toggleCode, setToggleCode] = useState(false)
  const [question, setQuestion] = useState('')
  const [title, setTitle] = useState('')
  const [codeblock, setCodeblock] = useState('')
  const [explanation, setExplanation] = useState('')
  const [do_good, setDoGood] = useState('')
  const [do_bad, setDoBad] = useState('')
  const [do_next, setDoNext] = useState('')

  const formData = {
    title: title,
    question: question, // question input
    code_block: codeblock, // codeblock input
    explanation: explanation,
    do_good: do_good,
    do_bad: do_bad,
    do_next: do_next,
    added_by: props.user.profile, // who created the post
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(formData)
      console.log(newPost) //<= verify new post data
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <Header />
      <PostForm 
      codeblock={codeblock}
      setCodeblock={setCodeblock}

      toggleCode={toggleCode}
      setToggleCode={setToggleCode}

      question={question}
      setQuestion={setQuestion}

      explanation={explanation}
      setExplanation={setExplanation}

      do_good={do_good}
      setDoGood={setDoGood}

      do_bad={do_bad}
      setDoBad={setDoBad}

      do_next={do_next}
      setDoNext={setDoNext}

      title={title}
      setTitle={setTitle}


      handleCreatePost={handleCreatePost}
      />
    </div>
  )
}

export default CreatePost
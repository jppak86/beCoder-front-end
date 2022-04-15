import React from 'react'
import CodeEditor from '../../components/Code/CodeEditor'
import '../CreatePost/Create.css'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="question-prompt">
        <label>Enter Question title</label>
      </div>

      <input
        required
        name="title"
        autoComplete='off'
        placeholder="Title"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <div className="question-prompt">
        <label>Enter your question</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="question"
        autoComplete='off'
        placeholder="Question"
        value={props.question}
        onChange={(e) => props.setQuestion(e.target.value)}
      />

      <div className="border"></div>

      <div className="code-prompt">
        <label>Codeblock</label>
        <button type="button" id="plus-button"
        onClick={() => props.setToggleCode(!props.toggleCode)}>+</button>
      </div>

      {props.toggleCode &&
        <CodeEditor
          codeblock={props.codeblock}
          setCodeblock={props.setCodeblock}
        ></CodeEditor>
      }

      <div className="border"></div>

      <div className="question-prompt">
        <label>Enter your explanation</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="explanation"
        autoComplete='off'
        placeholder="explanation"
        value={props.explanation}
        onChange={(e) => props.setExplanation(e.target.value)}
      />

      <div className="border"></div>

      <div className="question-prompt">
        <label>What I did well</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="do_good"
        autoComplete='off'
        placeholder="What I did good..."
        value={props.do_good}
        onChange={(e) => props.setDoGood(e.target.value)}
      />

      <div className="border"></div>

      <div className="question-prompt">
        <label>What I did bad</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="do_bad"
        autoComplete='off'
        placeholder="What I did bad..."
        value={props.do_bad}
        onChange={(e) => props.setDoBad(e.target.value)}
      />

      <div className="border"></div>

      <div className="question-prompt">
        <label>What I will do</label>
      </div>

      <textarea rows='5' col ='60'
        required
        name="do_next"
        autoComplete='off'
        placeholder="Next time I will..."
        value={props.do_next}
        onChange={(e) => props.setDoNext(e.target.value)}
      />



      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
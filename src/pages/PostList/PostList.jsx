import React, { useState, useEffect } from 'react'

// Services
import { getAllPosts, updatePost, deletePost } from "../../services/postService"
// Components
import PostCard from '../../components/Post/PostCard'
import Header from '../../components/Header/Header'

const PostList = (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  const markUpdatePost = async (postId) => {
    try {
      const updatedPost = await updatePost(postId)
      setPosts(posts.map((post) => (post.id === postId ? updatedPost : post)))
    } catch (error) {
      throw error
    }
  }

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId)
      setPosts(posts.filter((post) => post.id !== postId))
    } catch (error) {
      throw error
    }
  }

  
  return (
    <div className="layout">
      <Header />
      {posts?.map((post) => (
        <PostCard
          post={post}
          key={post.id} user={props.user} markUpdatePost={markUpdatePost}
          handleDeletePost={handleDeletePost}
        />
      ))}
    </div>
  )
}

export default PostList
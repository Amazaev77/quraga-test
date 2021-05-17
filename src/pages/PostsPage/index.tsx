import React, { useEffect } from 'react'
import Post from '../../components/Post'
import { useDispatch } from 'react-redux'
import { loadPosts } from '../../redux/ducks/posts'
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PostsPage:React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const posts = useTypedSelector(state => state.posts.items)
  const loading = useTypedSelector(state => state.posts.loading)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </>
  )
}

export default PostsPage
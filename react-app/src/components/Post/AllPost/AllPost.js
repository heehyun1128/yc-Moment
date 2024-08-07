import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../../store/post";
import PostCard from "../PostCard/PostCard";
import './AllPost.css'
import { NavLink, useLocation } from 'react-router-dom'


const AllPost = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const currentPath = location.pathname
  const allPostsObj = useSelector(state => state.posts?.Posts)


  // useEffect(() => {
  //   dispatch(fetchAllPosts())
  //   window.scrollTo(0, 0)
  // }, [dispatch])

  useEffect(() => {
    dispatch(fetchAllPosts())
    // Restore the scroll position if it exists
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem('scrollPosition'); // Clean up after restoring
    }else{
      window.scrollTo(0, 0)
    }
  }, [dispatch]);


  if (!allPostsObj || Object.values(allPostsObj).length === 0) {
    return null
  }
  const allPosts = allPostsObj && Object.values(allPostsObj)
 


  return (


    <div id='all-post-container'>
    
        <h2 style={{'textAlign':'center','marginTop':"20px"}}>ALL POSTS</h2>
      <div id='all-post-div' >

        {allPosts && allPosts.map(post => {
         
          return <PostCard post={post} />
        })}
      </div>
    </div>



  )
}

export default AllPost
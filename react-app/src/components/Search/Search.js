import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'
import { fetchSearchedPosts } from "../../store/post";
import PostCard from "../Post/PostCard/PostCard";
import './Search.css'




const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryTerm = new URLSearchParams(location.search).get('q');
 
  const searchedPosts = useSelector(state => state.posts.searchPosts)

  useEffect(() => {
    dispatch(fetchSearchedPosts(queryTerm))
  }, [dispatch, queryTerm])

  let found = true;
  if (!searchedPosts || Object.keys(searchedPosts).length === 0) { found = false }

  return (
    <div >
      <div id='search-result-div' >
        <h1 style={{'textAlign':'center'}}>Search Result: {queryTerm}</h1>
      </div>
      {!found ?
        <div id='no-post-found'>
          <h1 >No posts found</h1>
        </div> :
        <div id='search-results-div'>
          {Object?.values(searchedPosts).map((post) => (
            <PostCard post={post} />
          ))}
        </div>}
    </div>
  )
}

export default Search
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from '../PostCard/PostCard'
import { useParams, useHistory, useLocation, NavLink } from "react-router-dom";
import { fetchSingleUser, fetchUserPosts } from "../../../store/user";
import './UserPost.css'
const UserPost = ({userPostArr}) => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory();
  const location = useLocation()
  const currentPath = location.pathname
  const sessionUser = useSelector(state => state.session?.user)


  // const singleUser = useSelector(state => state.users?.singleUser)
  // console.log(singleUser)
  if (!sessionUser || (sessionUser && Number(sessionUser.id) !== Number(userId))) {
    history.push('/')
  }

  // const userPosts = useSelector(state => state.users?.singleUser?.userPosts)

  // useEffect(() => {
  //   dispatch(fetchSingleUser(userId))
  // }, [dispatch, userId])
  // useEffect(() => {
  //   dispatch(fetchUserPosts(sessionUser.id))
  // }, [dispatch, sessionUser.id])


  // if (!userPosts) { return null }
  // const userPostArr = Object.values(userPosts)


  if (!sessionUser ) { return null }

  return (
    <div >
      {/* <h2>YOUR POSTS</h2> */}
      <div id='user-post-div' >
        {userPostArr && userPostArr.map(post => {
       
          return post && <PostCard post={post} />
        })}
        {!userPostArr?.length && <div id='no-post'><p >No Posts here</p></div>}
      </div>
    </div>
  )
}

export default UserPost
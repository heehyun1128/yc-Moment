import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation, NavLink } from "react-router-dom";
import PostCard from "../Post/PostCard/PostCard";
import {
  fetchFollowers,
  fetchSingleUser,
  fetchUserPosts,
} from "../../store/user";
import "./UserProfile.css";
import UserPost from "../Post/UserPost/UserPost";
import Like from "../Like/Like";
import Follower from "../Follow/Follower/Follower";
import Followed from "../Follow/Followed/Followed";
import { fetchAllPosts } from "../../store/post";
import ArcGISMap from "../ArcGISMap/ArcGISMap";

const UserProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session?.user);
  const [isViewAllUserPosts, setIsViewAllUserPosts] = useState(true);
  const [isViewLikedPosts, setIsViewLikedPosts] = useState(false);
  const [isViewFollowers, setIsViewFollowers] = useState(false);
  const [isViewFollowed, setIsViewFollowed] = useState(false);
  const [redText, setRedText] = useState(true);
  const [redLike, setRedLike] = useState(false);
  const [redFollowing, setRedFollowing] = useState(false);
  const [redFollower, setRedFollower] = useState(false);

  const allStyle = { color: redText ? "#c69a9a" : "black" };
  const likeStyle = { color: redLike ? "#c69a9a" : "black" };
  const followingStyle = { color: redFollowing ? "#c69a9a" : "black" };
  const followerStyle = { color: redFollower ? "#c69a9a" : "black" };

  const singleUser = useSelector((state) => state.users?.singleUser);

  if (
    !sessionUser ||
    (sessionUser && Number(sessionUser.id) !== Number(userId))
  ) {
    history.push("/");
  }

  // get all posts
  const allPostsObj = useSelector((state) => state.posts?.Posts);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const allPosts = allPostsObj && Object.values(allPostsObj);
  const userPosts =
    allPosts && allPosts.filter((post) => post?.creatorId === sessionUser?.id);
  

  useEffect(() => {
    dispatch(fetchSingleUser(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(fetchUserPosts(sessionUser?.id));
  }, [dispatch, sessionUser?.id]);

  if (!allPostsObj || Object.values(allPostsObj).length === 0) {
    return null;
  }
  const userPostArr = Object.values(userPosts);


  const handleViewAllUserPosts = (e) => {
    e.preventDefault();

    setIsViewAllUserPosts(true);
    setIsViewLikedPosts(false);
    setIsViewFollowers(false);
    setIsViewFollowed(false);
    setRedText(true);
    setRedLike(false);
    setRedFollower(false);
    setRedFollowing(false);
  };

  const handleViewLikedPosts = (e) => {
    e.preventDefault();
    setIsViewAllUserPosts(false);
    setIsViewLikedPosts(true);
    setIsViewFollowers(false);
    setIsViewFollowed(false);
    setRedText(false);
    setRedLike(true);
    setRedFollower(false);
    setRedFollowing(false);
  };

  const handleViewUserFollowers = (e) => {
    e.preventDefault();
    setIsViewAllUserPosts(false);
    setIsViewLikedPosts(false);
    setIsViewFollowed(false);
    setIsViewFollowers(true);
    setRedText(false);
    setRedLike(false);
    setRedFollower(true);
    setRedFollowing(false);
  };
  
  const handleViewUserFollowed = (e) => {
    e.preventDefault();
    setIsViewAllUserPosts(false);
    setIsViewLikedPosts(false);
    setIsViewFollowers(false);
    setIsViewFollowed(true);
    setRedText(false);
    setRedLike(false);
    setRedFollower(false);
    setRedFollowing(true);
  };

  if (!sessionUser) {
    return null;
  }

  return (
    <div id="profile-page-main-div">
      <div id="post-form-header">
        <h3
          id="back-to-all-posts"
          onClick={() => {
            history.push("/posts/all");
          }}
        >
          <i class="fa-solid fa-backward"></i>
          {` ALL POSTS `}
        </h3>
        <ArcGISMap />
      </div>
      <div id="profile-info-div">
        <div id="profile-info-img-div">
          {singleUser?.profileImage ? (
            <img src={singleUser.profileImage} alt="" />
          ) : (
            <i class="fa-solid fa-user fa-lg"></i>
          )}
        </div>
        <h4>{sessionUser && sessionUser.username}</h4>
        {/* <div id="follower" onClick={handleViewUserFollowers}>
          FOLLOWERS
        </div>
        <div id="follower" onClick={handleViewUserFollowed}>
          FOLLOWING
        </div> */}
      </div>
      <div id="post-nav">
        <div className="nav-link-div">
          <p style={allStyle} onClick={handleViewAllUserPosts}>
            YOUR POSTS
          </p>
        </div>
        <div className="nav-link-div">
          <p style={likeStyle} onClick={handleViewLikedPosts}>
            LIKED POSTS
          </p>
        </div>
        <div id="follower" onClick={handleViewUserFollowers}>
          <p style={followerStyle}>FOLLOWERS</p>
        </div>
        <div id="following" onClick={handleViewUserFollowed}>
          <p style={followingStyle}>FOLLOWING</p>
        </div>
      </div>
      <div id="posts-div">
        {isViewAllUserPosts && <UserPost userPostArr={userPostArr} />}
        {isViewLikedPosts && <Like />}
        {isViewFollowers && <Follower />}
        {isViewFollowed && <Followed />}
      </div>
    </div>
  );
};

export default UserProfile;

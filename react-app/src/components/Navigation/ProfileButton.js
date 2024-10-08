import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import './Navigation.css'
import { fetchUserProfileImage } from "../../store/user";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useModal } from "../../context/Modal";
import ImageValidationModal from "../Modal/ImageModal/ImageValidationModal";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [profilePic, setProfilePic] = useState(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [selImage, setSelImage] = useState(null)
  const [errors, setErrors] = useState({});
  const ulRef = useRef();
  const history = useHistory()
  const sessionUser = useSelector(state => state.session?.user)
  const [renderUpdateBtn, setRenderUpdateBtn] = useState(false)
  const { setModalContent, setOnModalClose } = useModal();
 
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      setRenderUpdateBtn(false)
      
      if (!ulRef?.current?.contains(e.target)) {
        setShowMenu(false);
        setProfilePic(null)

        setSelImage(null)
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/posts/all')
    closeMenu()
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  const displayFile = e => {
   
    e.stopPropagation()
    const image = e.target.files[0]
    const imageUrl = image && URL.createObjectURL(image)
    setSelImage(imageUrl)
  }

  const isImageValid = (postPic) => {
    const imageExtensions = ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG", "gif", "GIF"]
    if (!imageExtensions?.some(extension => postPic?.postImageUrl?.endsWith(extension) ||
      postPic?.name?.endsWith(extension))) {
      return false
    } else {
      return true
    }
  }

  const handleUpdateProfilePic = async e => {
    e.preventDefault();
    const formData = new FormData()
   
    if (!isImageValid(profilePic)) {
     setModalContent(<ImageValidationModal />);
      setImageLoading(false)
      return
    } else {
      setImageLoading(true)
      formData.append('profile_image_url', profilePic)
      formData.append('username', user.username)
      formData.append('first_name', user.firstname)
      formData.append('last_name', user.lastname)
      formData.append('email', user.email)
      formData.append('password', user.password)

      const data = await dispatch(fetchUserProfileImage(user.id, formData))



      setImageLoading(false)
      closeMenu()
      setRenderUpdateBtn(false)



    }

  }


  return (
    <>

      <div onClick={openMenu}>
        <i class="fa-solid fa-user"></i>
      </div>
      <ul className={ulClassName} ref={ulRef}>
        {user && (
          <>
            <div id='profile-main'>
              <div id="profile-up-left">
                {profilePic ? <img src={selImage} id='new-profile-pic' alt='' /> : <div id='user-profile-img-li'>
                  {user?.profileImage ? <img id='profile-img' src={user?.profileImage} alt="" /> : <i class="fa-solid fa-user fa-xl"></i>}
                </div>}
                  <div id="profile-up-right">
                    <label id='edit-comment-img-input-label'>
                      <input
                        type="file"
                        accept="image/*"
                    
                        onChange={(e) => {
                        
                          setProfilePic(e.target.files[0])
                          displayFile(e)
                          setRenderUpdateBtn(true)
                        }}
                      />
                      <span id='profile-icon-span'>
                        +
                      </span>
                    </label>
                  </div>
                <div>Welcome, {user?.username}</div>
              </div>

            </div>
            {/* edit profile image */}
            <div id="button-section">
              {renderUpdateBtn && <button onClick={handleUpdateProfilePic}>Update Profile Image</button>}
              <button id='logout-btn' onClick={handleLogout}>LOG OUT</button>
            </div>

          </>
        )

        }
      </ul>
    </>
  );
}

export default ProfileButton;


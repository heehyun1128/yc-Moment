import React, { useEffect, useState } from "react";
import { fetchRemoveFollowed } from "../../../store/user";
import { useDispatch } from "react-redux";
import "./Followed.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "../../../context/Modal";
import FollowModal from "../../Modal/FollowModal/FollowModal";

const FollowedCard = ({ followed, sessionUser }) => {
  const dispatch = useDispatch();
  const [followdStatus, setFollowdStatus] = useState(false);
  const { setModalContent, setOnModalClose } = useModal();

  const handleRemoveFollowUser = async (followed) => {
    // unfollow
    await dispatch(fetchRemoveFollowed(sessionUser?.id, followed?.id));
    
    
    setModalContent(<FollowModal type="unfollow" />);
    setFollowdStatus(false);
  };

  useEffect(() => {
    if (followed) {
      setFollowdStatus(true);
    } else {
      setFollowdStatus(false);
    }
  }, [followed]);

  return followdStatus ? (
    <div>
      <div id="follow-user-div">
        {followed?.profileImage ? (
          <div id="new-profile-pic">
            <img src={followed?.profileImage} alt="" />
          </div>
        ) : (
          <div id="profile-img-li">
            <i class="fa-solid fa-user fa-xl"></i>
          </div>
        )}
        <p>{followed.username}</p>
      </div>

     
      {sessionUser && sessionUser?.id !== followed?.id && (
        <Button
          variant="contained"
          style={{
          
            backgroundColor: "rgba(0,0,0,0.5)",
            
          }}
          onClick={() => handleRemoveFollowUser(followed)}
          startIcon={<DeleteIcon />}
        >
          {followdStatus && "UNFOLLOW"}
        </Button>
      )}
    </div>
  ) : null;
};

export default FollowedCard;

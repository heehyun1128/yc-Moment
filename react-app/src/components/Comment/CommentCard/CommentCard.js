import React, { useEffect } from 'react'
import './CommentCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleComment } from '../../../store/comment'
import OpenModalButton from '../../OpenModalButton'
import EditCommentModal from '../CommentModal/EditCommentModal'
import DeleteCommentModal from '../CommentModal/DeleteCommentModal'



const CommentCard = ({ comment }) => {
  // const singleComment = useSelector(state => state.comments?.singleComment)
  const sessionUser = useSelector((state) => state.session.user)
  // const commentImages = useSelector(state => state.comments?.singleComment?.commentImages)
  const dispatch = useDispatch()

  // console.log(commentImages)
  // useEffect(() => {
  //   dispatch(fetchSingleComment(comment.id))
  // }, [dispatch])

  // console.log(singleComment)

  return (
    <div id='comment-card-div'>

      <div id="comment-creator-div">
        <div id='comment-creator-pic-div'>
          {comment.commentCreator?.profileImage ?
            <img src={comment.commentCreator?.profileImage} alt="" />
            : <i class="fa-solid fa-user fa-lg"></i>
          }
        </div>

        {comment && comment.commentCreator && comment.commentCreator.username && <p id="comment-creator-username">{comment.commentCreator.username}</p>}

      </div>
      <div id="comment-content-div">
        <div id="comment-content">{comment?.content}</div>
        {/* <div id='comment-img-div'>{singleComment?.commentImages && singleComment?.commentImages?.map(image =>
          <img src={image} alt="" />
        )}</div> */}
        {/* <div id='comment-img-div'>{comment?.commentImages && comment?.commentImages?.map(image =>
          <img src={image} alt="" />
        )}</div> */}
      </div>
      <div>
        {sessionUser && comment?.commentCreator?.id === sessionUser?.id &&
          <><OpenModalButton
            buttonText="Edit Comment"

            modalComponent={<EditCommentModal comment={comment} />}

          />
            <OpenModalButton
              buttonText="Delete Comment"

              modalComponent={<DeleteCommentModal commentId={comment?.id} />}

            />
          </>
        }
      </div>

    </div>
  )
}

export default CommentCard
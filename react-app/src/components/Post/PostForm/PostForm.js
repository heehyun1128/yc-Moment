import React, { useEffect, useState } from "react";
import { fetchCreatePost, fetchCreatePostImage, fetchUpdatePost, fetchUpdatePostImage } from "../../../store/post";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './PostForm.css'
import { fetchDeletePostImage } from "../../../store/postImage";

const PostForm = ({ post, formType }) => {
  console.log(post)
  const dispatch = useDispatch();
  const history = useHistory();
  const [postPics, setPostPics] = useState(post?.postImages || new Array(5).fill(null))
  const [imageLoading, setImageLoading] = useState(false)
  const [title, setTitle] = useState(post?.title || '')
  const [content, setContent] = useState(post?.content || '')
  const [errors, setErrors] = useState({});
  const [imgErrors, setImgErrors] = useState({});
  const [postImgArr, setPostImgArr] = useState([])
  const [selFileNames, setSelFileNames] = useState([])
  const [selImageUrls, setSelImageUrls] = useState([])
  const [backgroundImg, setBackgroundImg] = useState('')
  // const [edittedImgIdList, setEdittedImgIdList] = useState([])
  const [imgInputIdList, setImgInputIdList] = useState(postPics.map(pic => pic?.id))
  const [isCancelImageUpdate, setIsCancelImageUpdate] = useState(new Array(5).fill(false))
  const [deleteImageCalled, setDeleteImageCalled] = useState(new Array(5).fill(false))
  // const [chooseFileBtnClicked, setchooseFileBtnClicked] = useState(false)
  console.log(isCancelImageUpdate)
  // GET INITIAL IMAGE URLS
  const initialUrls = post?.postImages?.map(pic => pic?.postImageUrl)

  useEffect(() => {
    // const initialUrls = post?.postImages?.map(pic => pic?.postImageUrl)
    console.log(initialUrls)
    initialUrls && setSelImageUrls(initialUrls)
  }, [post?.postImages])

  const handleRemoveImg = (index) => {
    const imgInputLi=[...imgInputIdList]
    imgInputLi[index]=null
    setImgInputIdList(imgInputLi)
    const imageId = postPics[index].id
    const isImageDeleted = [...deleteImageCalled]
    console.log(isImageDeleted)
    isImageDeleted[index] = true
    console.log(isImageDeleted[index])
    setDeleteImageCalled(isImageDeleted)
    const newPics = [...postPics]
    newPics[index] = null
    console.log(newPics)
    setPostPics(newPics.filter(pic => pic !== null))
    dispatch(fetchDeletePostImage(imageId))
    alert('Image successfully deleted!')
  }
  console.log(deleteImageCalled)
  const handleUndoImageUpdate = (index) => {
    console.log("undo image change")
    const fileNames = [...selFileNames]
    const imageUrls = [...selImageUrls]
    console.log([...isCancelImageUpdate])
    const imgUpdateBtnClicked = [...isCancelImageUpdate] //[]


    imgUpdateBtnClicked[index] = false
    console.log(imgUpdateBtnClicked)
    setIsCancelImageUpdate(imgUpdateBtnClicked)

    fileNames[index] = ''
    setSelFileNames(fileNames)

    // postImageUrl
    imageUrls[index] = post?.postImages[index]?.postImageUrl
    setSelImageUrls(imageUrls)
    console.log('imageUrls', imageUrls)
    const newPics = [...postPics]

    newPics[index] = post?.postImages[index]
    console.log('new', newPics)

    setPostPics(newPics.filter(pic => pic !== null))
  }
  const handleDeselectImg = (index) => {
    console.log('first')
    const fileNames = [...selFileNames]
    const imageUrls = [...selImageUrls]

    fileNames[index] = ''
    setSelFileNames(fileNames)

    imageUrls[index] = ''
    setSelImageUrls(imageUrls)

    const newPics = [...postPics]
    newPics[index] = null

    setPostPics(newPics.filter(pic => pic !== null))
  }


  const resetForm = () => {
    setPostPics(new Array(5).fill(null))
    setTitle('')
    setContent('')
  }

  if (postPics.length < 5) {
    console.log([...postPics, ...new Array(5 - postPics.length).fill(null)])
    const newArr = [...postPics, ...new Array(5 - postPics.length).fill(null)]
    setPostPics(newArr)

  }
  const handleImageChange = (e, index) => {
    console.log(imgInputIdList)
    // const edittedImgId=e.target.id
    // if(!edittedImgIdList.includes(edittedImgId)){
    //   setEdittedImgIdList([...edittedImgIdList,edittedImgId])
    // }
    const fileNames = [...selFileNames]
    const imageUrls = [...selImageUrls]
    const imageInputIds = [...imgInputIdList]

    console.log(imageInputIds)
    if (e.target.files[0]) {
      const imgUpdateBtnClicked = [...isCancelImageUpdate]
      imgUpdateBtnClicked[index] = true

      setIsCancelImageUpdate(imgUpdateBtnClicked)
      console.log(e.target.files[0].name)
      fileNames[index] = e.target.files[0].name
      setSelFileNames(fileNames)
      // get selected image URL
      imageUrls[index] = URL.createObjectURL(e.target.files[0])
      setSelImageUrls(imageUrls)

      imageInputIds[index] = Number(e.target.id)
      console.log(imageInputIds[index])
      setImgInputIdList(imageInputIds)

      console.log(imgInputIdList)

      const newPics = [...postPics]
      newPics[index] = null
      newPics[index] = e.target.files[0]
      setPostPics(newPics.filter(pic => pic !== null && pic !== undefined))
      // setPostPics(postPics.filter(pic => pic !== null))
      console.log(newPics)
      // setIsCancelImageUpdate(true)
    } else {

      fileNames[index] = fileNames[index] || 'No File Chosen'
    }

  }


  const isImageValid = (postPic) => {
    const imageExtensions = ["pdf", "png", "jpg", "jpeg", "gif"]
    if (!imageExtensions?.some(extension => postPic?.postImageUrl?.endsWith(extension) ||
      postPic?.name?.endsWith(extension))) {
      return false
    } else {
      return true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === 'createPost') {
      post = {
        title,
        content
      }
      const textData = await dispatch(fetchCreatePost(post));
      // postPics?.map(async postPic => {
      let preview = false
      for (const postPic of postPics) {
        if (postPic === null || postPic === undefined) continue
        const formData = new FormData();
        setImageLoading(true)
        console.log(postPics.indexOf(postPic))
        if (postPics.indexOf(postPic) === 0) {
          preview = true
        } else {
          preview = false
        }
        console.log(preview)
        if (!isImageValid(postPic)) {
          // setImgErrors({ 'image': 'Pictures must end with "pdf", "png", "jpg", "jpeg", or "gif" ' })
          alert('Pictures must end with "pdf", "png", "jpg", "jpeg", or "gif" ')
          return
        } else {
          formData.append('post_image_url', postPic)
          formData.append('preview', preview)
          formData.append('post_id', textData.id)
          const imageData = await dispatch(fetchCreatePostImage(formData));
        }

      }
      if (textData.errors) {
        setErrors(textData.errors);

      } else {
        setImageLoading(false)

      }
      history.push(`/posts/${textData.id}`)
      resetForm()
    } else if (formType === 'updatePost') {


      post = {
        ...post,
        title,
        content,

      }

      const textData = await dispatch(fetchUpdatePost(post));


      let preview = false
      console.log(postPics)
      for (let i = 0; i < postPics.length; i++) {
        const postPic = postPics[i]
        console.log(postPics.indexOf(postPic))
        if (postPic === null || postPic === undefined) continue
        const formData = new FormData();
        console.log(postPic) //pics not clicked on will have postPic.id

        const edittedImgId = imgInputIdList[i]
        setImageLoading(true)
        console.log(postPics.indexOf(postPic))
        if (postPics.indexOf(postPic) === 0) {
          preview = true
        } else {
          preview = false
        }

        console.log(isImageValid(postPic))

        if (!isImageValid(postPic)) {
          // setImgErrors({ 'image': 'Pictures must end with "pdf", "png", "jpg", "jpeg", or "gif" ' })
          alert('Pictures must end with "pdf", "png", "jpg", "jpeg", or "gif" ')
          return
        } else {
          console.log(postPic, preview)
          formData.append('post_image_url', postPic)
          formData.append('preview', preview)
          formData.append('post_id', textData.id)
          // console.log(edittedImgId)
          console.log(postPic)
          console.log(edittedImgId)
          if (postPic && postPic.id) {
            const imageData = await dispatch(fetchUpdatePostImage(formData, postPic.id));
          } else if (edittedImgId) {
            const imageData = await dispatch(fetchUpdatePostImage(formData, edittedImgId));
          } else if (postPic) {
            console.log('called')
            await dispatch(fetchCreatePostImage(formData))
          }
        }
      }

      if (textData.errors) {
        setErrors(textData.errors);

      } else {
        setImageLoading(false)

      }
      history.push(`/posts/${textData.id}`)
      // resetForm()
    }










  }
  return (
    <div>
      {formType === "createPost" && <h2>Create a post</h2>}
      {formType === "updatePost" && <h2>Update your post</h2>}
      <form form id='create-post-form' onSubmit={handleSubmit} encType="multipart/form-data">

        {formType === "updatePost" &&

          <>
            <h4>Edit your post images</h4>
            {postPics && postPics.map((img, index) => (

              <div key={index}>
                <input
                  type="file"
                  accept="image/*"
                  key={imgInputIdList[index]}
                  id={imgInputIdList[index]}
                  // style={{
                  //   backgroundImage: img?.postImageUrl ? `url(${img?.postImageUrl})` : 'url(https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg)',
                  //   backgroundSize: 'cover',
                  //   width: img?.postImageUrl && '50px',
                  //   height: img?.postImageUrl && '50px',
                  // }}
                  onChange={(e) => {
                    handleImageChange(e, index)
                    console.log(e.target.files[0])
                    // setPostPic(e.target.files[0])
                  }}

                />
                {img && !deleteImageCalled[index] && !isCancelImageUpdate[index] && <div onClick={() => handleRemoveImg(index)}>REMOVE IMAGE</div>}
                {img && isCancelImageUpdate[index] && <div onClick={() => handleUndoImageUpdate(index)}>UNDO IMAGE CHANGE {isCancelImageUpdate[index]}</div>}
                {img && !deleteImageCalled[index] && <div id='upload-img-preview'><img src={selImageUrls[index]} alt="" />{deleteImageCalled[index] + ''}</div>}
                <p>{selFileNames[index]}</p>
                {/* {imgErrors && imgErrors.image &&
                  <p className="errors">{errors.image}</p>
                } */}
              </div>
            ))}
          </>

        }

        {formType === "createPost" &&
          <>
            <h4>Add an image to start</h4>

            {postPics && postPics.map((pic, index) => {
              console.log(index)
              return <div key={index} id="post-image-div">
                <input
                  type="file"
                  accept="image/*"
                  // value={profilePic}
                  onChange={(e) => {
                    handleImageChange(e, index)
                    console.log(e.target.files[0])
                    // setPostPic(e.target.files[0])
                  }}

                />
                {pic && <div onClick={() => handleDeselectImg(index)}>DESELECT IMAGE</div>}
                <div id='upload-img-preview'><img src={selImageUrls[index]} alt="" /></div>
                <p>{selFileNames[index]}</p>
                {/* {(imageLoading) && <p>Loading...</p>} */}
              </div>
            })}

          </>
        }

        <div id="post-title-div">
          <h4>Title</h4>
          <input
            type="text"
            placeholder="Please give you post a title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              console.log(e.target.value)
            }}
            required
          />
          {errors && errors.title &&
            <p className="errors">{errors.title}</p>
          }
        </div>

        <div id="post-content-div">
          <h4>Content</h4>
          <textarea
            type="text"
            value={content}
            placeholder="Add post Content here..."
            onChange={(e) => {
              console.log(e.target.value)
              setContent(e.target.value)
            }}
            required
          />
          {errors && errors.title &&
            <p className="errors">{errors.content}</p>
          }
        </div>
        <button type="submit">POST</button>
      </form>
    </div>
  )
}

export default PostForm
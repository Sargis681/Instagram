import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showMore } from '../../hoc/showMore'
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/postsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Comments from '../Comments/Comments'

function Post({ id, img, name, likesCount, postText, timeAgo, comments, isShown, open }) {
    const dispatch = useDispatch()
    const formRef = useRef(null)
    const { currentUser } = useSelector(selectUsers)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment({
            id,
            body: formRef.current[0].value,
            username: currentUser.username
        }))

        formRef.current.reset()

    }


    return (
        <div className="post">
            <div className="info">
                <h4 style={{ textDecoration: 'none' }} className="user">
                    {/* <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user"> */}
                    <div className="profile-pic"><img src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} alt="" /></div>
                    <p className="username">{name}</p>
                    {/* </NavLink> */}
                </h4>
                <img src={IMAGES.option} className="options" alt="" />
            </div>
            <img src={img} className="post-image" alt="" />
            <div className="post-content">
                <div className="reaction-wrapper">
                    <img src={IMAGES.like} className="icon" alt="" />
                    <img src={IMAGES.comment} className="icon" alt="" />
                    <img src={IMAGES.send} className="icon" alt="" />
                    <img src={IMAGES.save} className="save icon" alt="" />
                </div>
                <p className="likes">{likesCount}</p>
                {
                    postText !== '' &&
                    <p className="description"><span>{name} </span> {postText}</p>
                }
                <p className="post-time">{timeAgo}</p>
                <Comments open={open} isShown={isShown} comments={comments} />
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="comment-wrapper">
                    <img src={IMAGES.smile} className="icon" alt="" />
                    <input onFocus={open} type="text" className="comment-box" placeholder="Add a comment" />
                    <button className="comment-btn">post</button>
                </div>
            </form>
        </div>
    )
}

export default showMore(Post)
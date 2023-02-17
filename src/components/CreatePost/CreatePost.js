import { current } from '@reduxjs/toolkit';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost as addPost_posts } from '../../store/slices/posts/postsSlice';
import { addPost as addPost_users, selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const { currentUser } = useSelector(selectUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(currentUser);
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])

    const formRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const { img: { value: img }, desc: { value: postText } } = formRef.current
        const initialPost = {
            id: new Date().getTime().toString(),
            name: currentUser.username,
            timeAgo: Math.round(Math.random() * 8 + 2) + 'Minutes Ago',
            likesCount: Math.round(Math.random() * 300 + 200),
            comments: [],
            img: img, postText,

        }
        dispatch(addPost_users(initialPost))
        dispatch(addPost_posts(initialPost))

        navigate('/')
        formRef.current.reset()
    }
    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }} className='container'>
            <h1 style={{ fontSize: '50px' }}>Create Post</h1>
            <br />
            {/* <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />    */}
            <br />
            <form ref={formRef} onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
                <input type='text' name='img' placeholder='img' />
                <input type='text' name='desc' placeholder='desc' />
                <label className="input-file">
                    <input type="submit" style={{ display: 'none' }} name="file" />
                    <span>Add Post</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;

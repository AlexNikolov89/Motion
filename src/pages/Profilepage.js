import React, {useEffect} from 'react'
import UserConatiner from '../components/UserContainer/UserContainer'
import {ProfileWrapper, Banner, BannerImg, UserInfoWrapper, UserPostsContainer} from '../style/Profilepage'
import background from '../assets/images/banner.png'
import Navbar from '../components/Navbar/Navbar'
import { useState } from 'react/cjs/react.development'
import {userAction} from '../store/actions/userAction';
import {postUserAction} from '../store/actions/postAction'
import { useDispatch } from 'react-redux';
import Post from '../components/Posts/Posts'


const Profilepage = () => {
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({})
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchUser = async () => {
            const data = await dispatch(userAction())
            setUserInfo(data)
        }
        fetchUser()
    }, []);

    useEffect(() => {
        const userPosts = async () => {
            const data = await dispatch(postUserAction())
            setPosts(data);
        }
        userPosts();
    }, [])

    return (
        <>
            <Navbar />
            <ProfileWrapper>
                <Banner>
                    <BannerImg src={background} />
                </Banner>
                <UserInfoWrapper>
                    <UserConatiner userInfo={userInfo} />
                
                <UserPostsContainer>
                    {posts.map(post => 
                        <Post post={post} key={post.id} /> )}
                </UserPostsContainer>
                </UserInfoWrapper>
            </ProfileWrapper>
        </>
    )
}

export default Profilepage;

import React, {useEffect} from 'react'
import UserConatiner from '../components/UserContainer/UserContainer'
import {ProfileWrapper, Banner, BannerImg, UserInfoWrapper, UserPostsContainer} from '../style/Profilepage'
import background from '../assets/images/banner.png'
import Navbar from '../components/Navbar/Navbar'
import { useState } from 'react/cjs/react.development'
import {userAction} from '../store/actions/userAction';
import {myPostAction} from '../store/actions/postAction'
import { useDispatch } from 'react-redux';
import Post from '../components/Posts/Posts'
import Spinner from '../components/Spinner/Spinner'

const Profilepage = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({})
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const fetchUser = async () => {
            const data = await dispatch(userAction())
            setUserData(data)
        }
        fetchUser()
    }, []);

    useEffect(() => {
        const userPosts = async () => {
            const data = await dispatch(myPostAction())
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
                    <UserConatiner userData={userData} />
                
                <UserPostsContainer>
                    {posts.length > 0 ? posts.map(post => 
                        <Post post={post} key={post.id} /> ) : <Spinner />}
                </UserPostsContainer>
                </UserInfoWrapper>
            </ProfileWrapper>
        </>
    )
}

export default Profilepage;

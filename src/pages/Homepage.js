import React, { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar'
import NewPost from '../components/NewPost/NewPost';
import {PostsWrapper} from '../style/Homepage';
import Posts from '../components/Posts/Posts'
import { useState } from 'react/cjs/react.development';
import Spinner from '../components/Spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux';
import {postAction} from '../store/actions/postAction'

const Homepage = () => {
    const dispatch = useDispatch();
    //const [posts, setPosts] = useState([]);
    const posts = useSelector(state => state.postReducer.posts)

    
    useEffect(() => {
        const fetchPosts = async () => {
        const data = await dispatch(postAction());
        console.log(data)

        };
        fetchPosts()
    }, [])

        
    return (
        <Fragment>
            <Navbar />
            <SearchBar />
            <PostsWrapper>
                <NewPost />
                {posts.length > 0 ? posts.map(
                    post => <Posts post={post} key={post.id} />
                    ) : <Spinner />}
            </PostsWrapper>
        </Fragment>
    )
}

export default Homepage;

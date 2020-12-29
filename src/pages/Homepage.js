import React, { Fragment, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar'
import NewPost from '../components/NewPost/NewPost';
import {PostsWrapper} from '../style/Homepage';
import Posts from '../components/Posts/Posts'
import { useState } from 'react/cjs/react.development';
import Spinner from '../components/Spinner/Spinner'
import { useDispatch } from 'react-redux';
import {postAction} from '../store/actions/postAction'

const Homepage = () => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(postAction());
            setPosts(data);
        };
        getData()
    }, [])
        
    return (
        <Fragment>
            <Navbar />
            <SearchBar />
            <PostsWrapper>
                <NewPost />
                {posts.length
					? posts.map(post => <Posts post={post} key={post.id} />)
					: <Spinner />}

            </PostsWrapper>
        </Fragment>
    )
}

export default Homepage;

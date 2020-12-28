import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar'
import NewPost from '../components/NewPost/NewPost';
import {PostsWrapper} from '../style/Homepage'

const Homepage = () => {
    return (
        <Fragment>
            <Navbar />
            <SearchBar />
            <PostsWrapper>
                <NewPost />
            </PostsWrapper>
        </Fragment>
    )
}

export default Homepage;

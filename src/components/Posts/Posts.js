import React, { Fragment } from 'react'
import AvatarImg from '../../assets/images/users/jennifer.png'
import MenuIcon from '../../assets/svgs/menu.svg';
import LikeImg from '../../assets/svgs/heart.svg';
import ShareImg from '../../assets/svgs/share.svg'
import {PostContainer, TopContainer, UserContainer, Avatar, UserDetails, UserInfo, DateTime,
        MenuImg, MiddleContainer, Post, BottomContainer, LeftSide, LikeContainer,
        LikeIcon, Title, ShareContainer, ShareIcon, RightSide, NumLikes, DeleteContainer} from '../../style/Posts.js'
import { useState } from 'react/cjs/react.development';
import DeleteModal from '../DeleteModal/DeleteModal'


const Posts = ({post}) => {
    //console.log(post)
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(showModal => !showModal)
    }

    return (
        <Fragment>
            {showModal ? <DeleteModal /> : null}
            <PostContainer>
            <TopContainer>
                <UserContainer>
                    <Avatar src={post.user.avatr} />
                    <UserDetails>
                        <UserInfo>{post.user.username}</UserInfo>
                        <DateTime>{post.created}</DateTime>
                    </UserDetails>
                    <DeleteContainer>
                        <MenuImg src={MenuIcon} onClick={showModalHandler} />
                    </DeleteContainer>
                </UserContainer>
            </TopContainer>
            <MiddleContainer>
                <Post>{post.content}</Post>
            </MiddleContainer>
            <BottomContainer>
                <LeftSide>
                    <LikeContainer>
                        <LikeIcon src={LikeImg} />
                        <Title>Like</Title>
                    </LikeContainer>
                    <ShareContainer>
                        <ShareIcon src={ShareImg} />
                        <Title>Like</Title>
                    </ShareContainer>
                </LeftSide>
                <RightSide>
                    <NumLikes>{post.user.amount_of_likes} Likes</NumLikes>
                </RightSide>
            </BottomContainer>
            </PostContainer>
        </Fragment>
    )
}

export default Posts

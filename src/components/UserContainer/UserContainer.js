import React from 'react'
import {AvatarContainer, Top, Bottom,
        Avatar, Username, UserLocation, Button,
        AboutContainer, AboutTop, AboutBottom,
        RightSide, Title, About, Email, LeftSide, Container, Tag,
        Posts, Likes, Friends, Followers, Following, Amount, UserInfoContainer} from '../../style/UserContainer'
import avatar from '../../assets/images/users/jennifer.png'
import { useState } from 'react/cjs/react.development'

const UserDetails = ({userInfo}) => {
    console.log(userInfo)

    return (
        <UserInfoContainer>
            <AvatarContainer>
                <Top>
                    <Avatar src={avatar} />
                    <Username>{userInfo.first_name} {userInfo.last_name}</Username>
                    <UserLocation>Winterthur, Switzerland</UserLocation>
                </Top>
                <Bottom>
                    <Button>Edit Profile</Button>
                </Bottom>
            </AvatarContainer>
            <AboutContainer>
                <AboutTop>
                    <RightSide>
                        <Title>About</Title>
                        <About>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                quis architecto beatae vitae sit, assumenda deserunt, ratione
                                ipsum exercitationem possimus sed quaerat voluptas tempora
                        </About>
                        <Title>Email</Title>
                        <Email>{userInfo.email}</Email>
                    </RightSide>
                    <LeftSide>
                        <Title>Things I like</Title>
                        <Container>
                            <Tag>Cooking</Tag>
                            <Tag>Travel</Tag>
                            <Tag>Reading</Tag>
                            <Tag>Swimming</Tag>
                            <Tag>Running</Tag>
                        </Container>
                    </LeftSide>
                </AboutTop>
                <AboutBottom>
                    <Posts>
                        <Amount>{userInfo.amount_of_posts}</Amount>
                        <span>Posts</span>
                    </Posts>
                    <Likes>
                        <Amount>{userInfo.amount_of_likes}</Amount>
                        <span>Likes</span>
                    </Likes>
                    <Friends>
                        <Amount>{userInfo.amount_of_friends}</Amount>
                        <span>Friends</span>
                    </Friends>
                    <Followers>
                        <Amount>{userInfo.amount_of_followers}</Amount>
                        <span>Followers</span>
                    </Followers>
                    <Following>
                        <Amount>{userInfo.amount_following}</Amount>
                        <span>Following</span>
                    </Following>
                </AboutBottom>
            </AboutContainer>
        </UserInfoContainer>
    )
}

export default UserDetails

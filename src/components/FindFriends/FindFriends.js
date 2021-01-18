import React from 'react'
import {FriendsCardContainer, FriendImage, FriendName, FriendLocation,
        ButtonWrapper, ButtonFollow, ButtonAdd} from '../../style/FindFriends'

const FindFriends = ({friend}) => {
    console.log(friend)
    return (
        <FriendsCardContainer>
            <FriendImage><i class="fas fa-user"></i></FriendImage>
            <FriendName>{friend.first_name} {friend.last_name}</FriendName>
            {friend.location ? 
                (<FriendLocation>{friend.location}</FriendLocation>)
                 : (<FriendLocation>Zurich, Switzerland</FriendLocation>)}
            <ButtonWrapper>
                <ButtonFollow>Follow</ButtonFollow>
                <ButtonAdd>Add friend</ButtonAdd>
            </ButtonWrapper>
        </FriendsCardContainer>
    )
}

export default FindFriends

import React, { Fragment, useState } from 'react';
import LogoImg from '../../assets/images/logo.png';
import PostsImg from '../../assets/images/posts_logo.png';
import {Link} from 'react-router-dom'
import Bell from '../../assets/svgs/notification_bell.svg';
import Avatar from '../../assets/images/users/jennifer.png'
import Menu from '../../assets/svgs/menu.svg'
import ProfileImg from '../../assets/svgs/icon-profile.svg';
import LogoutImg from '../../assets/svgs/icon-logout.svg';
import {Container, LeftSide, LogoContainer, LogoIcon, Logo,
        PostsContainer, PostsIcon, FindContainer, Find, Posts, 
        RightSide, BellIcon, Notification, AvatarIcon, MenuIcon,
        AvatarContainer, MenuContainer, ProfileContainer, LogoutContainer, 
        Profile, Logout, DropdownMenu} from '../../style/Navbar.js';

const Navbar = () => {
    
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownHandler = () => {
        setShowDropdown(showDropdown => !showDropdown)
    }

    return (
        <Fragment>
            <Container>
                <LeftSide>
                    <LogoContainer>
                        <LogoIcon src={LogoImg} />
                        <Logo>Motion</Logo>
                    </LogoContainer>
                    <PostsContainer className='active'>
                        <PostsIcon src={PostsImg} />
                        <Posts>Posts</Posts>
                    </PostsContainer>
                    <FindContainer className='active'>
                            <i className="fas fa-user-friends" />
                            <Find>Frind Friends</Find>
                    </FindContainer>
                </LeftSide>

                <RightSide>
                    <Notification>
                        <BellIcon src={Bell} />
                        <span>3</span>
                    </Notification>
                    <AvatarContainer>
                        <AvatarIcon src={Avatar} />
                    </AvatarContainer>
                    <MenuContainer>
                        <MenuIcon src={Menu} onClick={dropdownHandler} />
                    {showDropdown ? (
                        <DropdownMenu>
                            <ProfileContainer>
                                <Link to='/profile'>
                                    <Profile src={ProfileImg} />
                                    Profile
                                </Link>
                            </ProfileContainer>
                            <LogoutContainer>
                                <Link to='/'>
                                    <Logout src={LogoutImg} />
                                    Logout
                                </Link>
                            </LogoutContainer>
                        </DropdownMenu>
                    ) : null}
                    </MenuContainer>
                </RightSide>
            </Container>
        </Fragment>
    )
}

export default Navbar

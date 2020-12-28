import styled from 'styled-components';

export const Container = styled.div `
    height: 80px;
    width: 100%;
    display: flex;
`;

export const LeftSide = styled.div `
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const LogoContainer = styled.div `
    display: flex;
    margin-left: 60px;
    cursor: pointer;

`;

export const LogoIcon = styled.img `
    height: 40px;
    width: 40px;
`;

export const Logo = styled.h2 `
    margin-left: 10px;
`;

export const PostsContainer = styled(LogoContainer) `
    /* border-bottom: 2px solid #AD73FD;
        &:hover, &:active {
            font-weight: bold;
            padding-bottom: 20px;
            border-bottom: 2px solid #AD73FD;
        } */


`;

export const PostsIcon = styled.img `
    width: 25px;
`;

export const Posts = styled(Logo) `
    font-size: 18px;
`;

export const FindContainer = styled(LogoContainer) `
    
    i {
        color: grey;
        font-size: 20px;
        margin-right: 10px;
    }

    /* &:hover, &:active {
            font-weight: bold;
            padding-bottom: 20px;
            border-bottom: 2px solid #AD73FD;
        } */
`;

export const Find = styled.a `
    a {
        text-decoration: none
    }
`;

export const RightSide = styled.div `
    display: flex;
    justify-content: flex-end;
    width: 50%;
    align-items: center;
    padding-right: 30px;
`;

export const Notification = styled.div `
    margin-right: 50px; 

    span {
        background: #AD73FD;
        font-size: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		padding: 0.75rem;
		position: absolute;
		top: 10px;
		right: 250px;
		color: #fff;


    }
`;

export const BellIcon = styled.img ``;

export const AvatarContainer = styled(Notification) ``;

export const AvatarIcon = styled.img `
    width: 50px;
`;

export const MenuContainer = styled(Notification) `
    &:hover {
        cursor: pointer;
    }
`;

export const DropdownMenu = styled.div `
    background: #fff;
	width: 180px;
	height: 100px;
	position: absolute;
	top: 80px;
	right: 35px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const ProfileContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;

    a{
        text-decoration: none;
        color: #000;
        width: 100%;
        height: 100%;

        &:hover {
			background: #f2f2f2;
		}

    }
`;

export const Profile = styled.img `
    height: 25px;
    margin: 5px 10px;
`;

export const MenuIcon = styled.img ``;

export const Logout = styled(Profile) ``;

export const LogoutContainer = styled(ProfileContainer) ``;




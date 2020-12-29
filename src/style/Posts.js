import styled from 'styled-components'


export const PostContainer = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 560px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.10);
`;

export const TopContainer = styled.div ``;

export const UserContainer = styled.div `
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

export const Avatar = styled.img `
    padding-right: 30px;
    height: 60px;
    width: 100px;
`;

export const UserDetails = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const UserInfo = styled.h4 ``;

export const DateTime = styled.p `
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
`;

export const DeleteContainer = styled.div ``;

export const MenuImg = styled.img ``;

export const MiddleContainer = styled.div `
    padding: 0 20px;
`;

export const Post = styled.p ``;

export const BottomContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const LeftSide = styled.div `
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

export const LikeContainer = styled.div `
    display: flex;
    justify-content: center;
`;

export const LikeIcon = styled.img `
    padding-right: 10px;
`;

export const Title = styled.p ``;

export const ShareContainer = styled.div `
    display: flex;
    padding: 20px;

`;

export const ShareIcon = styled(LikeIcon) ``;

export const RightSide = styled.div `
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
`;

export const NumLikes = styled.p ``;
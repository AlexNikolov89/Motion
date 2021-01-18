import styled from 'styled-components';

export const UserInfoContainer = styled.div `
    width: 70%;
    height: 50%;
    background: #fff;
    display: flex;
    margin: -200px auto; 
    border-radius: 4px;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.15);
    border: 2px solid rgba(0, 0, 0, 0.1);
`;

export const AvatarContainer = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    border-right: 2px solid rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.img `
    width: 100px;
    margin-bottom: 16px;
`;

export const Top = styled.div `
    height: 60%;
`;

export const Bottom = styled.div `
    height: 40%;
    padding-top: 22px;
`;

export const Username = styled.h2 `
    padding-bottom: 8px;
`;

export const UserLocation = styled.h6 `
    font-size: 16px;
    font-weight: normal;
`;

export const Button = styled.button `
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid rgba(187, 184, 234, 0.5);
    cursor: pointer;
    padding: 12px 28px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: bold;
    outline: none;

    &:active, &:hover {
        background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    }
`;

export const AboutContainer = styled.div `
    width: 70%;
    height: 90%;
`;

export const AboutTop = styled.div `
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    height: 80%;
    display: flex;
`;

export const RightSide = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 45px 30px;
    text-align: left;
`;

export const Title = styled.h5 `
    font-size: 15px;
    color: grey;
    padding-bottom: 15px;
`;

export const About = styled.h5 `
    padding-bottom: 30px;
`;

export const Email = styled.h5 ``;

export const AboutBottom = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 30px auto;
`;

export const LeftSide = styled(RightSide) ``;

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px 0; 
`;

export const Tag = styled.h5 `
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-right: 15px;

`;

export const Posts = styled.h5 `
    font-size: 16px;
    cursor: pointer;

    &:active {
        font-weight: bold;
        border-bottom: 2px solid red;
    }

    span {
        border-bottom: none;
    }
`;

export const Likes = styled(Posts) ``;

export const Friends = styled(Posts) ``;

export const Followers = styled(Posts) ``;

export const Following = styled(Posts) ``;

export const Amount = styled(Posts) ``;
import styled from 'styled-components';

export const ProfileWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Banner = styled.div `
    width: 100vw;
    height: 45%;
`;

export const BannerImg = styled.img `
    height: 100%;
    width: 100%;
`;

export const UserInfoWrapper = styled.div `
    height: 100%;
    background: #F2F2F2;
    /* width: 70%;
    height: 50%;
    background: #fff;
    display: flex;
    margin: -200px auto; 
    border-radius: 4px;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.15); */
`;

export const UserPostsContainer = styled.div `
    width: 100%;
    padding: 70px 150px;
    background-color: #F2F2F2;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
    margin-top: 200px;
`;
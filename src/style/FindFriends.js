import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    padding: 70px 300px;
    background-color: #F2F2F2;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 20px;
`;

export const FriendsCardContainer = styled.div `
    width: 300px;
    height: 400px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.10);
`;

export const FriendImage = styled.div `
    display: flex;
    justify-content: center;

    i {
        font-size: 50px;
        padding-top: 40px;
        color: #AD73FD;
    }
`

export const FriendName = styled.h3 ``;

export const FriendLocation = styled.p ``;

export const ButtonWrapper = styled.div ``;

export const ButtonFollow = styled.button ``;

export const ButtonAdd = styled.button ``;
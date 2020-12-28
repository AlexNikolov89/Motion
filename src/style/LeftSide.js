import styled from 'styled-components';
import background from '../assets/images/background_image.png'
import {theme} from '../style/index'

export const Container = styled.div `
    width: 40%;
    height: 100%;
    background-image: url(${background}), linear-gradient(132.96deg, #C468FF 100%, #6E91F6 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LogoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const Logo = styled.img `
    width: 80px;
    height: 80px;
    margin-top: 120px;
`;

export const LogoContainer = styled.div `
    margin-bottom: 60px;
`;

export const DesrcriptionTop = styled.h3 `
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 300;
`;

export const DesrcriptionBottom = styled(DesrcriptionTop) `
    padding-top: 8px;
`;

export const LogoText = styled.h1 `
    color: white;
    padding-bottom: 30px;
`;

export const AppContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const AppStore = styled.button `
    background-color: transparent;
    border: 1px solid white;
    width: 126px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const GooglePlay = styled(AppStore) `
    margin-left: 8px;
`;

export const AppImage = styled.img ``;

export const GoogleImage = styled.img ``;

export const SocialMediaContainer = styled.div `
    display: flex;
    margin-top: 80px;
`;

export const Facebook = styled.button `
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    i {
        color: ${theme.colorPurplePrimary};
        font-size: 20px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.4);
    }
`;

export const Twitter = styled(Facebook) ``;

export const Instagram = styled(Facebook) ``;

export const Footer = styled.div `
    
    p {
        color: white;
        margin-top: 40px
    }
`;


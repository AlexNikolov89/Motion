import React, {Fragment} from 'react'
import {Container, LogoContainer, Logo, LogoText, DesrcriptionTop,
    DesrcriptionBottom, LogoWrapper, AppContainer, AppStore, AppImage, GooglePlay,
    GoogleImage, SocialMediaContainer, Twitter, Facebook, Instagram, Footer} from '../../style/LeftSide';
import LogoImg from '../../assets/images/logo_white.png';
import Apple from '../../assets/svgs/apple.svg'
import Google from '../../assets/svgs/google.svg'

const LeftSide = () => {
    return (
        <Fragment>
            <Container>
                <LogoContainer>
                    <LogoWrapper>
                        <Logo src={LogoImg} alt='logo' />
                        <LogoText>Motion</LogoText>
                    </LogoWrapper>
                    <DesrcriptionTop>
                        Connect with friends and the world
                    </DesrcriptionTop>
                    <DesrcriptionBottom>
                    around you with Motion.
                    </DesrcriptionBottom>
                </LogoContainer>
                <AppContainer>
                    <AppStore><AppImage src={Apple} /></AppStore>
                    <GooglePlay><GoogleImage src={Google} /></GooglePlay>
                </AppContainer>
                <SocialMediaContainer>
                    <Twitter> <i class="fab fa-twitter" /></Twitter>
                    <Facebook><i class="fab fa-facebook-f" /></Facebook>
                    <Instagram><i class="fab fa-instagram" /></Instagram> 
                </SocialMediaContainer>
                <Footer><p>© Motion 2018. All rights reserved</p></Footer>
            </Container>
        </Fragment>
    )
}

export default LeftSide;

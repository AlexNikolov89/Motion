import React, {Fragment} from 'react'
import {Container, RightContainer, LeftContainer, GooglePlay,
        GoogleImage, SocialMediaContainer, Twitter,
        Facebook, Instagram, Footer, LogoContainer, LogoWrapper,
        Logo, LogoText, DesrcriptionTop, DesrcriptionBottom,
        AppContainer, AppStore, AppImage, RightSideWrapper, ContainerBottom} from '../../style/LandingPage';
import RightSide from '../../components/RightSide/RightSide';
import { useState } from 'react/cjs/react.development';
import SignUp from '../../components/SignUp/SignUp';
import {ContainerTop, Title, Button} from '../../style/RightSide';
import LogoImg from '../../assets/images/logo_white.png';
import Apple from '../../assets/svgs/apple.svg'
import Google from '../../assets/svgs/google.svg'


const LandingPage = () => {
    const [toggleSwitch, setToggleSwitch] = useState(true)
    return (
        <Fragment>
            <Container>
                <LeftContainer>
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
                                <Twitter> <i className="fab fa-twitter" /></Twitter>
                                <Facebook><i className="fab fa-facebook-f" /></Facebook>
                                <Instagram><i className="fab fa-instagram" /></Instagram> 
                        </SocialMediaContainer>
                    <Footer><p>© Motion 2018. All rights reserved</p></Footer>
                </LeftContainer>
                <RightSideWrapper>
                <ContainerTop>
                    {toggleSwitch ? (<Title>Don't have an account?</Title>) : (<Title>Already have an account?</Title>)}
                    <Button onClick={() => setToggleSwitch(!toggleSwitch)}>{toggleSwitch ? 'SIGNIN' : 'SIGNUP'}</Button>
                </ContainerTop>
                <ContainerBottom>
                    {toggleSwitch ? <RightSide /> : <SignUp />}
                </ContainerBottom>
                </RightSideWrapper>
            </Container>
        </Fragment>
    )
}

export default LandingPage;

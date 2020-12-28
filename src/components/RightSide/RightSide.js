import React, {Fragment, useState} from 'react'
import {Container, ContainerTop, Title, Button, FormContainer, Input, Form, InputUsername, AvatarImg, InputPass, PassImg,
 TitleSignin, ButtonSignin} from '../../style/RightSide';
import Avatar from '../../assets/svgs/avatar.svg';
import Pass from '../../assets/svgs/password.svg';
import {authAction} from '../../store/actions/authAction';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

const RightSide = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();
        const authResponse = await dispatch(authAction(email, password));
        if (authResponse.access) {
            history.push('/homepage');
        } else {
            return 'Error';
        }
    }

    const handleEmail = (e) => {
        setEmail(e.currentTarget.value)
    }

    const handlePassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    return (
        <Fragment>
            <Container>
                <ContainerTop>
                    <Title>Don't have an account?</Title>
                    <Button>SIGN UP</Button>
                </ContainerTop>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <TitleSignin>Sign In</TitleSignin>
                        <InputUsername>
                            <AvatarImg src={Avatar} />
                            <Input value={email} 
                                    type='text' 
                                    placeholder='Email'
                                    onChange={handleEmail}
                                    required />
                        </InputUsername>
                        <InputPass>
                            <PassImg src={Pass} />
                            <Input value={password} 
                                    type='text' 
                                    placeholder='Password' 
                                    onChange={handlePassword}
                                    required />
                        </InputPass>
                        <ButtonSignin >SIGN IN</ButtonSignin>
                    </Form>
                </FormContainer>
            </Container>
        </Fragment>
    )
}

export default RightSide;

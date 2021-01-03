import React, {Fragment, useState} from 'react'
import {Container, ContainerTop, Title, Button, FormContainer, Input, Form, InputUsername, AvatarImg, InputPass, PassImg,
 TitleSignin, ButtonSignin} from '../../style/RightSide';
import Avatar from '../../assets/svgs/avatar.svg';
import Pass from '../../assets/svgs/password.svg';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {baseUrl} from '../../store/baseUrl';
import {authAction} from '../../store/actions/authAction'

const RightSide = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();
        const url = `${baseUrl}/auth/token`;
        const config = {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
        }),
        body: JSON.stringify({ email, password }),
        };
        
        fetch(url, config)
            .then((res) => res.json())
            .then((data) => {
                dispatch(authAction(data.access));
                localStorage.setItem('token', data.access);
                history.push('/homepage');
            })
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

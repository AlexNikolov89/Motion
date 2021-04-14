import React, {Fragment, useState} from 'react'
import {Container, ContainerTop, Title, Button, FormContainer, Input, Form, InputUsername, AvatarImg, InputPass, PassImg,
 TitleSignin, ButtonSignin} from '../../style/RightSide';
import Avatar from '../../assets/svgs/avatar.svg';
import Pass from '../../assets/svgs/password.svg';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {baseUrl} from '../../store/baseUrl';
import {authAction, setUser} from '../../store/actions/authAction'
import { useEffect } from 'react';

const RightSide = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('nikolov.aleksandra@hotmail.com')
    const [password, setPassword] = useState('123456')

    const handleSubmit = e => {
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: new Headers ({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({email, password})
        };
        fetch(`${baseUrl}/auth/token/`, config)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(authAction(data.access));
                dispatch(setUser(data.user))
                localStorage.setItem('token', data.access);
                if(data.access) {
                    history.push('/homepage')
                } else {
                    history.push('/login')
                }
                
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
                {/*<ContainerTop>
                    <Title>Don't have an account?</Title>
                    <Button onClick={handleClick}>SIGN UP</Button>
                </ContainerTop>*/}
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
                        <ButtonSignin>SIGN IN</ButtonSignin>
                    </Form>
                </FormContainer>
            </Container>
        </Fragment>
    )
}

export default RightSide;

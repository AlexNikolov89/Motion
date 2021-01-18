import React from 'react'
import {Label, Letter, Input, Form, InputWrapper, FormContainer, Image, TextWrapper, 
        Text, TextBottom, TitleSignUp, StepOneContainer, StepTwoContainer,
        StepThreeContainer, InputMail, InputCode, InputFirstname,
        InputLastname, InputPass, InputPass2, InputUsername, Wrapper, 
        FormContainerWrapper, FormWrapper} from '../../style/SignUp'
import {ButtonSignUp} from '../../style/RightSide'
import { useState } from 'react/cjs/react.development'
import { useDispatch } from 'react-redux'
import { registrationAction } from '../../store/actions/registrationAction'
import {validationAction} from '../../store/actions/validationAction'
import { useHistory } from 'react-router-dom'
import { setUser } from '../../store/actions/authAction'

const SignUp = () => {
    const [regState, setRegState] = useState('stepOne')
    const [code, setCode] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [first_name, setFirstname] = useState('')
    const [last_name, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [password_repeat, setRepeatPass] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()

    const stepOneHandler = (e) => {
        e.preventDefault();
        dispatch(registrationAction(email))
        setRegState('stepTwo')
    }

    const stepTwoHandler = (e) => {
        e.preventDefault();
        setRegState('stepThree')
    }

    const stepThreeHandler = (e) => {
        e.preventDefault();
        dispatch(validationAction({email, code, first_name, last_name, username, password, password_repeat}))
        if(password !== password_repeat) {
            alert('Password do not match')
        } else {
           history.push('/homepage')
        }
    }


const renderSwitch = (regState) => {
    switch(regState) {
        case 'stepOne': {
            return (
                <StepOneContainer> 
                    <FormContainer>
                        <Form onSubmit={stepOneHandler}>
                            <TitleSignUp>Sign Up</TitleSignUp>
                            <Label>Email</Label>
                            <InputWrapper>
                                <Letter><i className="fas fa-envelope"></i></Letter>
                                <Input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                            </InputWrapper>
                            <ButtonSignUp>CONTINUE</ButtonSignUp>
                        </Form>
                    </FormContainer>
                </StepOneContainer>
            )
        }
        case 'stepTwo': {
            return (
                <StepTwoContainer>
                    <Form onSubmit={stepTwoHandler}>
                    <TitleSignUp>Congratulations!</TitleSignUp>
                    <Image><i class="fas fa-check"></i></Image>
                    <TextWrapper>
                        <Text>We've send a confirmation code to your email</Text>
                        <TextBottom>{username.email}</TextBottom>
                    </TextWrapper>
                    <ButtonSignUp onSubmit={stepTwoHandler}>CONTINUE</ButtonSignUp>
                    </Form>   
                </StepTwoContainer>
            )
        }
        case 'stepThree': {
            return (
                <StepThreeContainer>
                    <FormContainerWrapper>
                        <TitleSignUp>Verification</TitleSignUp>
                        <FormWrapper onSubmit={stepThreeHandler}>
                            <InputCode type='text'
                             placeholder='Validation code'
                             value={code}
                             onChange={e => setCode(e.target.value)} />
                            <Wrapper>
                                <InputMail type='text' 
                                placeholder='Email' 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                                <InputUsername 
                                type='text' 
                                placeholder='Username' 
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                />
                                <InputFirstname type='text' 
                                placeholder='First name' 
                                value={first_name}
                                onChange={e => setFirstname(e.target.value)}
                                />
                                <InputLastname type='text' 
                                placeholder='Last name' 
                                value={last_name}
                                onChange={e => setLastname(e.target.value)}
                                />
                                <InputPass type='text' 
                                placeholder='Password' 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                                <InputPass2 type='text' 
                                placeholder='Password repeat' 
                                value={password_repeat}
                                onChange={e => setRepeatPass(e.target.value)}
                                />
                            </Wrapper>
                            <ButtonSignUp>COMPLETE</ButtonSignUp>
                        </FormWrapper>
                    </FormContainerWrapper>
                </StepThreeContainer>
            )
        }
        default:
            history.push('/homepage')
    }
}
    return (
        <>
            {renderSwitch(regState)}
        </>
    )
    
}

export default SignUp

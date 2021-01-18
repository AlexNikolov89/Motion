import styled from 'styled-components';

export const StepOneContainer = styled.div ``;

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleSignUp = styled.h1 `
    color: #000;
    font-weight: 400;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
`;

export const Form = styled.form ``;

export const Input = styled.input `
    width: 80%;
    height: 30px;
    border: none;
    outline: none;
    color: #000;
`;

export const InputWrapper = styled.div `
    border-bottom: 2px solid rgba(187, 184, 234, 0.5);
    width: 300px;
    display: flex;
    justify-content: space-evenly;
`;

export const InputEmail = styled.div ``;

export const Label = styled.label `
    margin-left: 50px;
    color: grey;
`;

export const Letter = styled.div `
    i {
        color: #AD73FD;
       // margin-top: 10px;
       font-size: 25px;
    }
`;

// Step two container

export const StepTwoContainer = styled.div ``;

export const Image = styled.div ``;

export const Text = styled.h3 ``;

export const TextBottom = styled.h3 ``;

export const TextWrapper = styled.div ``;

export const MessageWrapper = styled.div ``;

// Step three container

export const StepThreeContainer = styled.div ``;

export const FormContainerWrapper = styled.div `
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center; */
`;

export const FormWrapper = styled.form `
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const InputCode = styled.input `
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    color: #000;
    border-bottom: 2px solid rgba(187, 184, 234, 0.5);
`;

export const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
`;

export const InputMail = styled.input `
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    color: #000;
    border-bottom: 2px solid rgba(187, 184, 234, 0.5);
`;

export const InputFirstname = styled(InputMail) ``;

export const InputLastname = styled(InputMail) `
    margin-left: 15px;
`;

export const InputPass = styled(InputMail) ``;

export const InputPass2 = styled(InputMail) `
    margin-left: 15px;
`;

export const InputUsername = styled(InputMail) `
    margin-left: 15px;
`;




import styled from 'styled-components';


export const Container  = styled.div `
    width: 60%;
    height: 100vh;
`;

export const ContainerTop = styled.div `
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
`;

export const Button = styled.button `
    background-color: #fff;
    height: 40px;
    width: 120px;
    outline: none;
    padding: 12px 30px;
    border-radius: 30px;
    text-align: center;
    border: 2px solid #eeeeee;

    &:hover {
        background-color: #eeeeee;
    }
`;

export const Title = styled.h4 `
    font-weight: 300;
    padding-right: 15px;
    padding-top: 10px;
   
`;

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const TitleSignin = styled.h1 `
    color: #000;
    font-weight: 400;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
`;

export const Input = styled.input `
    width: 80%;
    height: 50px;
    border: none;
    outline: none;
    color: #000;

`;

export const Form = styled.form ``;

export const AvatarImg = styled.img ``;

export const InputUsername = styled.div `
    border-bottom: 2px solid rgba(187, 184, 234, 0.5);
    width: 300px;
    display: flex;
    justify-content: space-evenly
`;

export const InputPass = styled(InputUsername) ``;

export const PassImg = styled.img ``;

export const ButtonSignin = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    //margin-top: 167px;
    justify-items: center;
    align-content: center;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    color: #ffff;
    border-radius: 30px;
    width: 280px;
    height: 60px;
    border: 2px solid rgba(200, 200, 200, 0.45);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    margin-top: 60%;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`;

export const ButtonSignUp = styled(ButtonSignin) `
    margin-top: 30%;
`
import styled from 'styled-components'


export const NewPostContainer = styled.div `
    max-width: 560px;
    width: 100%;
    height: 140px;
    display: flex;
	align-items: center;
	justify-content: space-around;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.10);
`;

export const AvatarImg = styled.img `
    width: 70px;
`;

export const Button = styled.button `
    width: 60px;
    height: 60px;
    display: flex;
	align-items: center;
	justify-content: center;
	border: none;
    justify-content: center;
	border: none;
    cursor: pointer;
    background: linear-gradient(102deg, #b847fd 0%, #4a5fa0);
    border-radius: 100px;
    border: 2px solid rgba(187, 184, 234, 0.5);
`;

export const ButtonImg = styled.img ``;

export const Input = styled.input `
    width: 60%;
    height: 30px;
    outline: none;
    border: none;
    font-size: 16px;
`;
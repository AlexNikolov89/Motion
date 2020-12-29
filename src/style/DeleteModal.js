import styled from 'styled-components'

export const ModalExtContainer = styled.main`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
`;

export const ModalIntContainer = styled.div `
    width: 40%;
	height: 55%;
	border-radius: 4px;
	background: #fff;
	position: absolute;
	top: 25%;
    left: 12%;
    
    i {
		cursor: pointer;
		color: #fff;
		font-size: ${props => props.theme.fontLarge};
		position: absolute;
		top: -25px;
		right: -25px;
	}
`;

export const ModalContainer = styled.div `
    display: flex;
    justify-content: center;
     i {
         font-size: 20px;
     }
`;
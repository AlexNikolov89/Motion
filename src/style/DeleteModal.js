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
    background: grey;
     i {
		 font-size: 25px;
		 color: grey;
		 position: absolute;
		 left: 455px;
		 top: 300px;
		 background: lightgray;
		 padding: 20px;
		 border-radius: 100%;
	 }
	 
	 h3 {
		font-size: 20px;
		position: absolute;
		left: 350px;
		font-weight: 600;
		padding-top: 15px;
	 }
`;

export const ButtonContainer = styled.div `
	position: absolute;
	bottom: 260px;
	left: 380px;
`;

export const ButtonNo = styled.button `
	padding: 5px 20px;
	background-color: transparent;
	border: 1px solid grey;
	border-radius: 50px;
	width: 100px; 
	outline: none;

	&:hover, &active {
		background-color: #c468ff;
	}
`;

export const ButtonYes = styled(ButtonNo) `
	margin-left: 25px;
`;
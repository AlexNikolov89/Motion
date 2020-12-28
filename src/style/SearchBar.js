import styled from 'styled-components';

export const SearchContainer = styled.div `
    background-color: #F2F2F2;
	width: 100%;
	height: 80px;
	display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const LeftSide = styled.div `
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 150px;
`;

export const Input = styled.input `
    width: 100%;
    border: none;
    outline: none;
    height: 30px;
	background: transparent;
    margin-left: 20px;
    font-size: 16px;
`;

export const Search = styled.img ``;

export const RightSide = styled.div `
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 150px;
`;

export const Follow = styled.p `
    padding-left: 20px;
`;

export const Friends = styled(Follow) ``;

export const Liked = styled(Follow) `
    border-bottom: 2px solid #000;
`;
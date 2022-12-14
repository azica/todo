import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    
  }
`;

export const Container = styled.div`
	max-width: 1070px;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
`


export const Row =styled.div`
  display: ${props => props.flex || 'flex'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: wrap;
  margin: 0 -10px;
`

export const Column = styled.div`
  flex: ${props => props.flex || "1"};
  width: ${props => props.flex || "100%"};
  text-align: ${props => props.align || "left"};
  padding: 0 10px;
`

export const Subtitle = styled.h2`
    margin: 70px 0 20px 0;
    text-align: center;
    font-size: 28px;
    color: #1E2832;
    font-family: 'Poppins',sans-serif;
`
export const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 6px 25px;
	background: #F64C72;
	border-radius: 8px;
	text-transform: capitalize;
	color: #fff;
	font-size: .875rem;
	font-weight: 700;
	line-height: 1.4;
	border: 0;
	height: 44px;
	transition: background .2s;
	&:hover {
		background: #2F2FA2;
	}
	&.active {
		background: #2F2FA2;
	}
	@media(max-width: 480px) {
		padding: 6px 20px;
	}
`
export const Main = styled.main`
	padding: 0 15px;
`
import styled from "styled-components";

export const InputGroup = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 25px;
	width: 100%;
`
export const Input = styled.input`
	width: 100%;
	background: #fff;
	padding: 6px 15px;
	border-radius: 8px;
	color: var(--gray-100);
	border: 1px solid #2F2FA2;
	transition: border .2s;
	height: 44px;
	margin-right: 8px;
	&:focus {
		outline: 0;
		border: 1px solid #F64C72;
	}
`


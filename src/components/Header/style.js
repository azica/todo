import styled from "styled-components";

export const HeaderWrapper = styled.header`
	padding: 10px 15px;
	margin-bottom: 50px;
`
export const Nav = styled.nav`
	a {
		display: inline-block;
		color: #242582;
		text-decoration: none;
		font-weight: bold;
		font-size: 16px;
		margin-left: 15px;
		&.active {
			color: #F64C72;
		}
	}
`
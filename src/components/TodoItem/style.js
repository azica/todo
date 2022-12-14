import styled from "styled-components";

export const TodoLi = styled.li`
	display: flex;
	align-items: center;
	background: var(--gray-400);
	border: 1px solid #242582;
	box-shadow: 0 2px 8px #0000000f;
	border-radius: 8px;
	padding: 1rem;
	margin-bottom: 0.75rem;
	width: 100%;
	&.done {
		text-decoration: line-through;
	}
	&.edit {
		border-color: #F64C72;
	}
	span {
		width: 100%;
	}
`
export const TodoCheckbox = styled.input`
	position: relative;
	border: 2px solid #2F2FA2;
	border-radius: 100%;
	background: none;
	cursor: pointer;
	margin: 0 8px 0 0;
	height: 22px;
	width: 22px;
	-webkit-appearance: none;
 	&:[type="checkbox"]{
	opacity: 1; 
  }
  &:checked {
	background-color: #2F2FA2;
	opacity: 1;
  }
  &:before {
	content: '';
	position: absolute;
	right: 50%;
	top: 50%;
	width: 8px;
	height: 17px;
	border: solid #FFF;
	border-width: 0 2px 2px 0;
	margin: -3px -2px 0 -1px;
	transform: rotate(45deg) translate(-50%, -50%);
	z-index: 2;
  }
`
export const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-left: auto;
  transition: 7s;

`
export const EditWrapper = styled.div`
	display: flex;
	align-items: center;
	background: var(--gray-400);
	gap: 0.75rem;
	border: 1px solid #242582;
	box-shadow: 0 2px 8px #0000000f;
	border-radius: 8px;
	padding: 6px 1rem;
	margin-bottom: 0.75rem;
	width: 100%;
`
export const Input = styled.input`
	border: none;
	width: 100%;
	&:focus {
		outline: none;
	}

`
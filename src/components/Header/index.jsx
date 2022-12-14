import React from 'react'
import logo from './todoLogo.svg'
import {HeaderWrapper, Nav} from './style'
import { Container, Row } from '../../globalStyles'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
	<HeaderWrapper>
		<Container>
			<Row justify="space-between">
				<a href='/'><img src={logo}/></a>
				<Nav>
					<NavLink to="/"  activeclassname='active'>Home</NavLink>
					<NavLink  to="/to-do">Todos</NavLink>
				</Nav>
			</Row>
		</Container>
	</HeaderWrapper>
  )
}

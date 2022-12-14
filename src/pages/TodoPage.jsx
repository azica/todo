import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Main, Row } from '../globalStyles'
import { TodoList } from '../components/TodoList/index';

const TodoPage = () => {
	const {todos, todoHeading}= useSelector(state=>state.todos)
	
  return (
	<Main>
		<Container>
			<Row>
				<TodoList todos={todos} todoHeading={todoHeading}/>
			</Row>
		</Container>
	</Main>
  )
}

export default TodoPage
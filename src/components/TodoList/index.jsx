import React from 'react'
import {TodoItem} from '../TodoItem';
import {TodoHeading, TodoListWrap} from './style'

export const TodoList = ({todos, todoHeading}) => {
  return (
	<TodoListWrap>
		<TodoHeading>{todoHeading}</TodoHeading>
		{todos.map(item=><TodoItem key={item.id} item={item}/>)}
	</TodoListWrap>
  )
}


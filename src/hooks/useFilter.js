export const useFilter = (todos, status)  => {
	
	switch (status) {
		case 'completed':
		return todos.filter(todo => todo.completed == true);

		case 'active':
		return todos.filter(todo => todo.completed == false);
		
		default:
		return todos;
	}
}



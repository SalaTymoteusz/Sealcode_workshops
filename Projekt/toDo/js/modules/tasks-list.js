// Show tasks
function showTasks() {
	tasks.forEach(function(title) { //dla każdego elementu tablicy 'tasks' wykonuje funkcje 'addNewTask'
			addNewTask(title);
	});
}

// Delete task
function deleteTask(task) {

	var liToDelete = task.closest('li');
	task.closest('ul').removeChild(liToDelete);

	//parent.removeChild();
}


function addNewTask(title) {

	var taskLi = document.createElement('li');


	taskLi.classList.add('single-task');
	taskLi.innerHTML = prepareTaskHTML(title);

	// Events  - toggle and delete
	var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
	var deleteBtn = taskLi.querySelector('.delete-task-btn');

	toggleCompleteBtn.addEventListener('click', function() { //zaznaczenie checkboxa
		toggleTaskComplete(this);
	});

	deleteBtn.addEventListener('click', function() { //klikniecie przycisku usun
		deleteTask(this);
	});


	// Add task to Dom
	tasksContainer.appendChild(taskLi);
}

function prepareTaskHTML(title) {
	return '<div class="input-group">' +
				 '<label><input type="checkbox" class="toggle-complete-btn"></label>'+
    		 '<input type="text" class="form-control" readonly placeholder="Tytuł zadania..." value="' + title + '">' +
    		 '<button class="btn-danger delete-task-btn"><b>X</b></button>' +
				 '</div>';
}

// Add new task events
function bindAddTaskEvents() {

	// On submit
	newTaskForm.addEventListener('submit', function() {
		event.preventDefault();


		var title = this.querySelector('input').value;

		var szlaban = true;
		var tablica = ['', ' ', '  ', '   ', '    ', '     ', '      ', '       ', '        ', '         ', '          '];
		for(var i=0; i<=title.length; i++){
			if(title==tablica[i]){
				szlaban=false;
			}
		}
		if(title && szlaban == true) {
			addNewTask(title);
			document.getElementById("myForm").reset(); //czyszczenie formularza po dodaniu zadania
		}
		else {
			 alert("You must write something!");
		}

	});
}

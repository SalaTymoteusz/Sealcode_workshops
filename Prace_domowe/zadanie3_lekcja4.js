var tablica = [];
tablica = ['a', 'b', 'x', 'x', 'e', 'x'];

function znajdz(pojemnik, element) {

	var i = 0;
	while (i < pojemnik.length) {
		
		if (element == tablica[i]) {
				console.log(element,i);
				break;	
	} else {
	i++;
		
		}
	}
}

znajdz(tablica,"x");
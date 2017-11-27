var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var j = 1; j < 11; j++) {
  console.log("Mnożenie przez " + j);
    for (var i = 0; i < tab.length; i++) {
	     console.log(j + " x " + i + " = " + tab[i] * j);
     }
}

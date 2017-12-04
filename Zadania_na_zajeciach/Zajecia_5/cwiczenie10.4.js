var sentence = "Home sweet home";
var el = document.getElementById('paragraph-one');
el.innerHTML = 'Nasz ciąg ma długość: ' + sentence.length + '<br>'+
'Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak: ' + sentence.toUpperCase() + '<br>'+
'Na 10. pozycji znajduje się znak: ' + sentence.charAt(9) + '<br>'+
'Ciąg "ee" znajduje się na miejscu: ' + sentence.indexOf('ee') + '<br>'+
'Ostatni indeks znaku "e" to: ' + sentence.lastIndexOf('e') + '<br>'+
'Znaki od 8 do 14 to: ' + sentence.substring(8,15) + '<br>'+
'Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak: ' + sentence.trim() + '<br>'+
'Po zmianie "me" na "w" nasz ciąg wygląda tak: ' + sentence.replace('me', 'w');

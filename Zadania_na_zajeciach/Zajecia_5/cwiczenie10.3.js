var el = document.getElementById('heading-one');
el.innerHTML = 'Zmieniona zawartość';

function Zadania(iloscZadan, nazwaPrzedmiotu, ileZrobionych) {
  this.iloscZadan = iloscZadan;
  this.nazwaPrzedmiotu = nazwaPrzedmiotu;
  this.ileZrobionych = ileZrobionych;
  this.ileZostalo = function() {
    return this.iloscZadan - this.ileZrobionych;
  };
}

var zadania = new Zadania(10, 'Programowanie', 5);

var el2 = document.getElementById('span-one');
el2.innerHTML = zadania.nazwaPrzedmiotu;

var el3 = document.getElementById('span-two');
el3.innerHTML = zadania.ileZostalo();

function obliczGestosc() {
  const miasto = document.getElementById('miasto').value.trim();
  const powierzchnia = parseFloat(document.getElementById('powierzchnia').value);
  const ludnosc = parseInt(document.getElementById('ludnosc').value);

  if (miasto && !isNaN(powierzchnia) && !isNaN(ludnosc) && powierzchnia > 0 && ludnosc >= 0) {
    const gestosc = (ludnosc / powierzchnia).toFixed(2);
    document.getElementById('nazwaMiasta').textContent = `Miasto: ${miasto}`;
    document.getElementById('gestoscZaludnienia').textContent = `Gęstość zaludnienia: ${gestosc} osób/km²`;
  } else {
    alert('Wprowadź poprawne dane!');
  }
}

function wyczyscDane() {
  document.getElementById('miasto').value = '';
  document.getElementById('powierzchnia').value = '';
  document.getElementById('ludnosc').value = '';
  document.getElementById('nazwaMiasta').textContent = 'Miasto: Brak';
  document.getElementById('gestoscZaludnienia').textContent = 'Gęstość zaludnienia: 0 osób/km²';
}

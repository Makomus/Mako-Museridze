document.getElementById('show-terms').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'block';
  });
  
const closeElements = document.getElementsByClassName('close');

for (let i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none';
    });
}

  
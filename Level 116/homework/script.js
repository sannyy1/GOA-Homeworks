const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('button');

outer.addEventListener('click', function() {
  console.log('Outer clicked (capturing phase)');
}, true);

inner.addEventListener('click', function() {
  console.log('Inner clicked (capturing phase)');
}, true);

button.addEventListener('click', function(event) {
  console.log('Button clicked');
  event.stopImmediatePropagation();
});
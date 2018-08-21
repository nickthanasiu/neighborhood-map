import './css/main.css';

function main() {
  let main = document.createElement('div');
  $(main).addClass('main');
  $(main).html('This is the main div');

  return main;
}

document.body.appendChild(main());

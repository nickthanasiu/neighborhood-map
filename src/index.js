import './css/main.css';

// DOM is populated when window is ready
$(function() {
  // Create the main container div

  function main() {
    let main = document.createElement('div');
    $(main)
      .addClass('main')
      .html('This is the main div');

    return main;
  }

  document.body.appendChild(main());


});
// Create the Navigation Sidebar
/*
function sideBar() {
  let sidebar = document.createElement()
}

*/

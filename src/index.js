import locations from './locations';

import './css/main.css';

// DOM is populated when window is ready
$(function() {
  // Create the main container div

  function main() {
    const main = document.createElement('div');
    $(main)
      .addClass('main')
      .html('This is the main div');

      function sideBar() {
        const sideBar = document.createElement('nav');
        $(sideBar)
          .addClass('sidebar hidden')
          .html('THIS IS THE SIDEBAR')
          .append(`
            <div class="sidebar-header">
              <form>
                <input
                  class="search"
                  type="search"
                  placeholder="Search for a location"
                />
              </form>
            </div>
          `)
          .append(`
            <div class="sidebar-list-wrapper">
              <ul class="sidebar-list list-unstyled components">
                ${
                  locations.map(location => (
                    `<li>
                      ${ location.name }
                    </li>`
                  ))
                }
              </ul>
            </div>
          `);




          return sideBar;
      }

    $(main).append(sideBar);
    return main;
  }



  $(document.body).append(main);

});

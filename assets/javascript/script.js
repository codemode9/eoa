$(document).ready(function() {

//*******************Nav Bar Render*************************//

$(document.body).append(`<nav class="navbar navbar-light " style="background-color:#EB695E">
    <a class="navbar-brand" style="color: white" href="#">
      EOA Zombies
    </a>
  </nav>`);

//***************End Nav Bar Render************************//

// left nav bar for locations btn, weapons btn, portals btn(maybe) etc...

$(document.body).append(
  `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 leftnav">
      
    </div>
    <div class="col-sm-9">
      second column visual placeholder
    </div>
  </div>
</div>`
);

$(".leftnav").append(
  `<div class="btn-group-vertical">
  <button type="button" class="btn btn-secondary">Locations</button>
  <button type="button" class="btn btn-secondary">Weapons</button>
  <button type="button" class="btn btn-secondary">Wonder Weapons</button>
</div>`
);

// clear main div and dependant on btn clicked rend more buttons or show guide inside main div

});
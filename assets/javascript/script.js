$(document).ready(function() {

//*******************Nav Bar Render*************************//

$(document.body).append(`<nav class="navbar navbar-light " style="background-color:#EB695E">
    <a class="navbar-brand" style="color: white" href="#">
      EOA Zombies
    </a>
  </nav>`);
//***************End Nav Bar Render************************//

//*********rend container with associated columns***********/
$(document.body).append(
  `<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 leftnav">
    </div>

    <div class="col-sm-9 rightdiv">
    </div>
  </div>
</div>`
);
//**************end rend container with associated columns*******/

//************rend navbar buttons******************/
$(".leftnav").append(
  `<div class="btn-group-vertical navBtnGrp">
  <button type="button" class="btn btn-secondary navBtns locationsBtn">Locations</button>
  <button type="button" class="btn btn-secondary navBtns areasBtn">Areas</button>
  <button type="button" class="btn btn-secondary navBtns weaponsBtn">Weapons</button>
  <button type="button" class="btn btn-secondary navBtns trophiesBtn">Achievements/Trophies</button>
</div>`
);
//****************end rend navbar buttons**************/

//****************rend landing page*********************/
$(".rightdiv").append(`<img id="landimg" src="assets/images/landpic.jpg"/>`);




//**************END DOC FUNCTION*******************/
});
//**************END DOC FUNCTION*********************/
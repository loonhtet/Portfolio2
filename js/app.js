$(document).ready(() => {
  $("#navbtn").click(function () {
    $("#navbtn").toggleClass("navanics");
  });

  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);

    if (getscrolltop >= 300) {
      $("#text").addClass("leftanics");
    } else {
      $("#text").removeClass("leftanics");
    }
  });
});

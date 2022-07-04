// hamburger menu
$(document).ready(function () {
  $(".menu-bars").click(function () {
    $(".hamburger-menu").animate({
      width: "300px",
    });
    $(".menu-close").fadeIn(500);
  });
  $(".menu-close").click(function () {
    $(".hamburger-menu").animate({
      width: 0,
    });
    $(".menu-close").fadeOut();
  });

  // Range
  setInterval(() => {
    let rangeVal1 = $("#myinputOne").val();
    $("#valBox1").text(rangeVal1);

    let rangeVal2 = $("#myinputTwo").val();
    $("#valBox2").text(rangeVal2);

    let rangeVal3 = $("#myinputThree").val();
    $("#valBox3").text(rangeVal3);
  });
});



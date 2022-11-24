console.log("Hello There!");
$(document).ready(function () {
  $(".btn-card-more-info").text("Show More");

  $(".toggle-card-1").click(function () {
    extendCard(this, 1);
  });
  $(".toggle-card-2").click(function () {
    extendCard(this, 2);
  });
  $(".toggle-card-3").click(function () {
    extendCard(this, 3);
  });
  $(".toggle-card-4").click(function () {
    extendCard(this, 4);
  });
  $(".toggle-card-5").click(function () {
    extendCard(this, 5);
  });
  $(".toggle-card-6").click(function () {
    extendCard(this, 6);
  });
  $(".toggle-card-7").click(function () {
    extendCard(this, 7);
  });
  $(".toggle-card-8").click(function () {
    extendCard(this, 8);
  });
  $(".toggle-card-9").click(function () {
    extendCard(this, 9);
  });

  function extendCard(btnTag, cardNum) {
    $(".slide-more-info-" + cardNum).slideToggle();
    if ($(btnTag).text() == "Show More") {
      $(btnTag).text("Show Less");
    } else {
      $(btnTag).text("Show More");
    }
  }

  $(".contact-form").submit(function (e) {
    alert("Message has been sent!");
    $(".contact-form").hide();
    $(".contact-form-title").hide();
    $(".contact-form-p").hide();
    $(".contact-answer").show();
    e.preventDefault();
  });
});

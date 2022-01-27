$(document).ready(function () {
    $(".header__menu ol li a").click(function () {
      // 1
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top;
      $("body,html").animate({ scrollTop: destination }, 1300);
    });
  });
  
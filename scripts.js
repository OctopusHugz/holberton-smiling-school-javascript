$(() => {
  $("#quotesCarousel").hide();
  $(".loader-div").css("display", "flex");
  $.getJSON("https://smileschool-api.hbtn.info/quotes", (response) => {
    response.forEach((user) => {
      let userName = user.name;
      let userTitle = user.title;
      let userQuote = user.text;
      let userPicURL = user.pic_url;
      let carouselQuoteP = $(`p.quote-${user.id}`);
      let carouselNameH5 = $(`h5.name-${user.id}`);
      let carouselTitleP = $(`p.title-${user.id}`);
      carouselQuoteP.html(userQuote);
      carouselNameH5.html(userName);
      carouselTitleP.html(userTitle);
    });
    $(".loader-div").css("display", "none");
    $("#quotesCarousel").show();
  });
});

$(() => {
  function createQuotes() {
    $("#quotesCarousel").hide();
    $(".loader-div").css("display", "flex");
    $.getJSON("https://smileschool-api.hbtn.info/quotes", (response) => {
      response.forEach((user) => {
        let userName = user.name;
        let userTitle = user.title;
        let userQuote = user.text;
        let userPicURL = user.pic_url;
        let quotesAvatarImage = $(
          `<img class="rounded-circle mx-auto" src="${userPicURL}" alt="Carousel slide">`
        );
        let mobileArrowLeft = $(
          '<a class="carousel-control-prev d-sm-none mobile-arrow" href="#quotesCarousel" role="button" data-slide="prev"></a>'
        );
        let mobileArrowRight = $(
          '<a class="carousel-control-next d-sm-none mobile-arrow" href="#quotesCarousel" role="button" data-slide="next"></a>'
        );
        let leftArrowSVG = $(
          '<svg width="30" height="64" viewBox="0 0 30 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.7802 63.1838L0.477539 31.8486L28.7802 0.513489L29.5224 1.18378L1.8253 31.8486L29.5224 62.5135L28.7802 63.1838Z" fill="white" /></svg><span class="sr-only">Previous</span>'
        );
        let rightArrowSVG = $(
          '<svg width="30" height="64" viewBox="0 0 30 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21975 63.1838L29.5225 31.8486L1.21975 0.513489L0.477648 1.18378L28.1747 31.8486L0.477648 62.5135L1.21975 63.1838Z" fill="white" /></svg><span class="sr-only">Next</span>'
        );
        let carouselItemActive = $('<div class="carousel-item active"></div>');
        let carouselItemNonActive = $('<div class="carousel-item"></div>');

        let carouselRow = $(
          '<div class="row align-items-center justify-content-between"></div>'
        );
        let carouselCol = $(
          '<div class="col-sm-4 offset-sm-1 d-flex align-items-center mt-auto"></div>'
        );

        let carouselTextDiv = $('<div class="col-sm-6 mr-auto mt-auto"></div>');
        let carouselTextQuote = $('<p class="font-weight-normal"></p>');
        let carouselTextName = $(
          '<h5 class="font-weight-bold quote-person-name"></h5>'
        );
        let carouselTextTitle = $(
          '<p class="font-italic quote-person-title"></p>'
        );
        $(mobileArrowLeft).append(leftArrowSVG);
        $(mobileArrowRight).append(rightArrowSVG);
        if (user.id === 1) {
          $(carouselItemActive).append(carouselRow);
          $("#quotesCarousel .carousel-inner").append(carouselItemActive);
        } else {
          $(carouselItemNonActive).append(carouselRow);
          $("#quotesCarousel .carousel-inner").append(carouselItemNonActive);
        }
        $(carouselRow).append(carouselCol, carouselTextDiv);
        $(carouselCol).append(
          mobileArrowLeft,
          quotesAvatarImage,
          mobileArrowRight
        );
        $(carouselTextDiv).append(
          carouselTextQuote,
          carouselTextName,
          carouselTextTitle
        );
        carouselTextQuote.html(userQuote);
        carouselTextName.html(userName);
        carouselTextTitle.html(userTitle);
      });
      $(".loader-div").css("display", "none");
      $("#quotesCarousel").show();
    });
  }
  function loadVideos() {
    $.getJSON(
      "https://smileschool-api.hbtn.info/popular-tutorials",
      (response) => {
        console.log(response);
      }
    );
  }
  createQuotes();
});

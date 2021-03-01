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
    let arrowLeft = $(
      '<a class="carousel-control-prev" href="#popularTutorialsCarousel" role="button" data-slide="prev"></a>'
    );
    let arrowRight = $(
      '<a class="carousel-control-next" href="#popularTutorialsCarousel" role="button" data-slide="next"></a>'
    );
    let leftArrowSVG = $(
      '<svg width="30" height="64" viewBox="0 0 30 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.7802 63.1838L0.477539 31.8487L28.7802 0.51355L29.5224 1.18384L1.8253 31.8487L29.5224 62.5136L28.7802 63.1838Z" fill="#071629" /></svg><span class="sr-only">Previous</span>'
    );
    let rightArrowSVG = $(
      '<svg width="30" height="64" viewBox="0 0 30 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21975 63.1838L29.5225 31.8487L1.21975 0.51355L0.477648 1.18384L28.1747 31.8487L0.477648 62.5136L1.21975 63.1838Z" fill="#071629" /></svg><span class="sr-only">Next</span>'
    );
    $(arrowLeft).append(leftArrowSVG);
    $(arrowRight).append(rightArrowSVG);
    $.getJSON(
      "https://smileschool-api.hbtn.info/popular-tutorials",
      (response) => {
        let count = 0;
        response.forEach((card) => {
          // if (count === 1) {
          //   return;
          // }
          // author: "Henry Hughes"
          // author_pic_url: "https://smileschool-api.s3.amazonaws.com/profile_4.jpg"
          // duration: "18 min"
          // id: 6
          // keywords: (2) ["Face", "Cry"]
          // published_at: 1586724529
          // star: 5
          // sub-title: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod."
          // thumb_url: "https://smileschool-api.s3.amazonaws.com/thumbnail_4.jpg"
          // title: "Cry and Smile"
          // topic: "Expert"
          // views: 321
          let cardSubtitle = card["sub-title"];
          let carouselItemActive = $(
            '<div class="carousel-item active"></div>'
          );
          let carouselItemNonActive = $('<div class="carousel-item"></div>');
          let layoutDiv = $(
            '<div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center justify-content-lg-around"></div>'
          );
          let cardDiv = $('<div class="card"></div>');
          let cardImgTop = $(
            `<div class="card-img-top" style="background-image: url(${card.thumb_url});" alt="Card image cap"><img src="./images/play.png" alt="Play Button"></div>`
          );
          // let playButton = $(
          //   '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" class="play-button" xmlns="http://www.w3.org/2000/svg"><path opacity="0.860352" fill-rule="evenodd" clip-rule="evenodd" d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M40.5 32.5L27.5 40.5L27.5 24.5L40.5 32.5Z" fill="#C271FF" /></svg>'
          // );
          let cardBody = $('<div class="card-body"></div>');
          let cardTitle = $(`<h5 class="card-title mb-0">${card.title}</h5>`);
          let cardText = $(`<p class="card-text">${cardSubtitle}<p>`);
          let cardBottomInfo = $('<div class="card-bottom-info d-flex"><div>');
          let cardBottomAvatarImg = $(
            `<img src="${card.author_pic_url}" alt="" class="rounded-circle mpt-avatar">`
          );
          let cardBottomAvatarName = $(
            `<p class="mpt-avatar-name">${card.author}</p>`
          );
          let cardBottomFooter = $(
            '<div class="card-bottom-footer d-flex justify-content-between">'
          );
          $(layoutDiv).append(cardDiv);
          if (card.id === 1) {
            $("#popularTutorialsCarousel .carousel-inner").append(
              carouselItemActive
            );
            $(carouselItemActive).append(layoutDiv);
            $(`#popularTutorialsCarousel`)
              .children(".carousel-inner")
              .append(carouselItemActive);
          } else {
            $("#popularTutorialsCarousel .carousel-inner").append(
              carouselItemNonActive
            );
            $(carouselItemNonActive).append(layoutDiv);
            $(`#popularTutorialsCarousel`)
              .children(".carousel-inner")
              .append(carouselItemNonActive);
          }
          // $(cardDiv).append(cardImgTop, playButton, cardBody);
          $(cardDiv).append(cardImgTop, cardBody);
          $(cardBody).append(
            cardTitle,
            cardText,
            cardBottomInfo,
            cardBottomFooter
          );
          $(cardBottomInfo).append(cardBottomAvatarImg, cardBottomAvatarName);
          // $(cardBottomFooter);
          count++;
        });
      }
    ).done(() => {
      $("#popularTutorialsCarousel").append(arrowLeft, arrowRight);
      $(`#popularTutorialsCarousel .carousel-item`).each(function () {
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }
        next.children(":first-child").clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(":first");
          }

          next.children(":first-child").clone().appendTo($(this));
        }
      });
    });
  }
  createQuotes();
  loadVideos();
  $(".carousel").carousel({
    interval: 10000,
  });
});

// XML API Code

// $(document).ready(function () {
//   $.get("https://smileschool-api.hbtn.info/xml/quotes", (response) => {
//     let responseDOM = response.documentElement;
//     let allQuotes = responseDOM.getElementsByTagName("quote");
//     for (let index = 0; index < allQuotes.length; index++) {
//       let picURL = responseDOM.getElementsByTagName("pic_url");
//       console.log(picURL);
//     }
//   });
// });

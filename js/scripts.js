jQuery(function () {
  // Sets the duration of each carousel slide
  $('#mycarousel').carousel({ interval: 2000 });

  // Function that lets user to toggle pause and play animation of the carousel
  $('#carouselButton').on('click', function () {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  });

  $('#loginBtn').on('click', function () {
    $('#loginModal').modal('show');
  });

  $('#reserveBtn').on('click', function () {
    $('#reserveModal').modal('show');
  });
});

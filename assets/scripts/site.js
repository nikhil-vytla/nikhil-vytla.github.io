// Dribbble shots
var accessToken = '740843bcd9fbc5ff08f6b60f0f64f3b3a4f4aff2e28e1e9c46beeed722fbc20c';
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
      if (data.length > 0) {
        $.each(data.reverse(), function(i, val) {
          if (i > 7) {
            var readableDate = new Date(val.published_at);
            var formatDate = readableDate.toDateString().split(" ");
            var month = formatDate[1];
            var year = formatDate[3];
            $('#dribbble-shots').prepend(
              '<div class="dribbble-shot"><a target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><img src="'+ val.images.hidpi +'"/></a><div><h4><a target="_blank" href="'+ val.html_url +'" title="' + val.title + '">' + val.title + '</a></h4><p>' + month + ' ' + year + '</p></div></div>'
              )
          }
        })
      }
    }
});

// Header styling

function updateHeader() {
  var scrollVal = $(document).scrollTop();
  $(".js-section").each(function() {
    var offset = ($(this).position().top) - 100;
    var colour = $(this).data("colour");
    if(scrollVal >= offset) {
      $('.js-header-content').removeClass('text-pinkLight text-purpleLight text-yellowLight text-greenLight');
      $('.js-header-content').addClass(colour);
    }
  });
}

$(document).scroll(function() {
  updateHeader();
});

// Header link logic

$('.social-link').hover(
  function() {
    var getLink = $(this).data('platform');
    $('.social-url ul').css('opacity', '1');
    if (getLink == 'twitter') {
      $('.social-url ul').css('top', '0');
    } else if (getLink == 'instagram') {
      $('.social-url ul').css('top', '-24px');
    } else if (getLink == 'linkedin') {
      $('.social-url ul').css('top', '-48px');
    } else if (getLink == 'github') {
      $('.social-url ul').css('top', '-72px');
    }
  }, function() {
    $('.social-url ul').css('opacity', '0');
  }
);

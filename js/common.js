!function ($) {

  $(function(){

    var $window = $(window)
// side bar
$('.projects-sidenav').affix({
  offset: {
    top: function () { return $window.width() <= 980 ? 290 : 210 }
  , bottom: 270
  }
})
})

}(window.jQuery)
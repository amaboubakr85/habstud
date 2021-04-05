var myNav = document.getElementById('main-nav')
let navSocial = document.getElementById('nav-social')
let logo = document.getElementById('logo')
window.onscroll = function () {
  'use strict'
  if (myNav && navSocial && logo) {
    if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60) {
      myNav.classList.add('nav-colored')
      myNav.classList.remove('nav-transparent')
      navSocial.classList.add('nav-social-colored')
      navSocial.classList.remove('nav-social-transparent')
    } else {
      myNav.classList.add('nav-transparent')
      myNav.classList.remove('nav-colored')
      navSocial.classList.add('nav-social-transparent')
      navSocial.classList.remove('nav-social-colored')
    }
  }
}

var topIMG = './assets/images/logo-home.png'
var sclIMG = './assets/images/logo-scroll.png'

let altLogo = $('img[alt="logo"]')

if (altLogo) {
  altLogo.attr('class', 'logo')

  $(window).scroll(function () {
    var value = $(this).scrollTop()
    if (value > 50) {
      $('.logo').attr('src', sclIMG)
      $('.logo').addClass('scroll-img')

      $('.navbar-light .navbar-toggler-icon').css('background-color', '#c3c3c3')
    } else {
      $('.logo').attr('src', topIMG)
      $('.logo').removeClass('scroll-img').addClass('logo')
      $('.navbar-light .navbar-toggler-icon').css('background-color', '#fff')
    }
  })
}
//  home slider

let sliderItems = $('.slider-items')
sliderItems.owlCarousel({
  rtl: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  margin: 10,
  nav: false,
  dots: false,

  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
})

$('.prev').click(function () {
  sliderItems.trigger('prev.owl.carousel')
})
$('.next').click(function () {
  sliderItems.trigger('next.owl.carousel')
})

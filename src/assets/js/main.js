(function ($) {
	"use strict";

   

            
        // Mobile menu
        $('.hamburger').on( 'click', function (event) {
            $(this).toggleClass('h-active');
            $('.main-nav').toggleClass('slidenav');
        });
        $('.header-home .main-nav ul li  a').on('click', function (event) {
            $('.hamburger').removeClass('h-active');
            $('.main-nav').removeClass('slidenav');
        });

        $(".main-nav .fl").on('click', function(event) {
            var $fl = $(this);
            $(this).parent().siblings().find('.sub-menu').slideUp();
            $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
            if($fl.hasClass('flaticon-plus')){
                $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
            }else{
                $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
            }
            $fl.next(".sub-menu").slideToggle();
        });




        //Mixitup
        $('.work-mixi').mixItUp();

     
        // Owl Carousel Auction
        $('.auction-slide-wrap').owlCarousel({
            items: 3,
            loop: true,
            smartSpeed: 1500,
            autoplay: true,
            dots: false,
            margin:24,
            nav: true,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1200:{
                    items:3
                },
                1400:{
                    items:3
                }

            } 
        });
        

       
        // Owl Carousel Auction Home Two
        $('.auction-slide-wrap-design-2').owlCarousel({
            items: 3,
            loop: true,
            smartSpeed: 1500,
            autoplay: true,
            dots: false,
            stagePadding: 20,
            margin:24,
            nav: true,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1200:{
                    items:3
                },
                1400:{
                    items:3
                }

            } 
        });


       
        // Owl Carousel Creator
        $('.creators-slide-wrap').owlCarousel({
            items: 4,
            loop: true,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            margin:24,
            nav: true,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                },
                1400:{
                    items:4
                }

            } 
        });


       
        // Owl Carousel Creator Home Two
        $('.creators-slide-wrap-2').owlCarousel({
            items: 4,
            loop: true,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            stagePadding: 20,
            margin:24,
            nav: true,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                },
                1400:{
                    items:4
                }

            } 
        });
       

        // Owl Carousel Buyer
        $('.top-buyer-slide-wrap').owlCarousel({
            items: 4,
            loop: true,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            margin:24,
            nav: true,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                },
                1400:{
                    items:4
                }

            } 
        });
       

        // Owl Carousel Blog
        $('.blog-slide-wrap').owlCarousel({
            items: 3,
            loop: true,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            margin:24,
            stagePadding: 15,
            nav: true,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1200:{
                    items:3
                },
                1400:{
                    items:3
                }

            } 
        });
       

        // Owl Carousel Blog
        $('.blog-slide-wrap-2').owlCarousel({
            items: 3,
            loop: true,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            margin:24,
            nav: true,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:2
                },
                992:{
                    items:2
                },
                1200:{
                    items:3
                },
                1400:{
                    items:3
                }

            } 
        }); 



        // Owl Carousel Testimonial
        $('.testimonial-slide-wrap').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1500,
            autoplay: false,
            dots: true,
            stagePadding: 15,
            margin:24,
            nav: false,
            navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"], 
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },

                768:{
                    items:1
                },
                992:{
                    items:1
                },
                1200:{
                    items:1
                },
                1400:{
                    items:1
                }

            } 
        });




      // Contact Form

      // Get the form.
      var form = $('#contact-form');

      // Get the messages div.
      var formMessages = $('.form-message');

      // Set up an event listener for the contact form.
      $(form).on( 'submit', function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
        })
        .done(function(response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function(data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text('Oops! An error occured. Message could not be sent.');
          }
        });
      });


      // Bottom To Top
      $(document).ready(function () {
        $(window).on( 'scroll', function () {
          if ($(this).scrollTop() > 100) {
            $('#scroll-top').fadeIn();
          } else {
            $('#scroll-top').fadeOut();
          }
        });
        $('#scroll-top').on( 'click', function () {
          $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
        });
      });

      

        // Price Range
        $( "#slider-range" ).slider({
            range: true,
            min: 130,
            max: 500,
            values: [ 130, 250 ],
            slide: function( event, ui ) {
              $( "#amount" ).val( "ETH" + ui.values[ 0 ] + " - ETH" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "ETH" + $( "#slider-range" ).slider( "values", 0 ) +
        " - ETH" + $( "#slider-range" ).slider( "values", 1 ) );
        // Price Range End


        // Custom Selector
        var x, i, j, l, ll, selElmnt, a, b, c;
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML === this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
                }
            }
            h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
        }
        function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt === y[i]) {
            arrNo.push(i)
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
        }
        document.addEventListener("click", closeAllSelect);

        // Custom Selector End


    jQuery(window).on( 'load', function(){
        //wow Animation
        new WOW().init();
        window.wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true,        // default
            offset: 100
        }
        )
        window.wow.init();
    });

}(jQuery));	
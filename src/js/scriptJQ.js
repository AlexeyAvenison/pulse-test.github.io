$(document).ready(function(){
   // slider(slick)   https://kenwheeler.github.io/slick/
   $(function slider (){
      $('.carousel-wrap').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/next.png"></button>',
         prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/prev.png"></button>'
      });
   });
   
   // tabs  https://denis-creative.com/jquery-tabs/ 

   $(function tabs () {
      // $(function tabSlick (){
      //    if (window.matchMedia('(max-width: 576px)').matches){  /* как медиа запросс в css */
      //       $(function sliderTab (){
      //          $('.catalog__tabs').slick({
      //             infinite: true,
      //             slidesToShow: 1,
      //             slidesToScroll: 1,
      //             fade: true,
      //             nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/next.png"></button>',
      //             prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/prev.png"></button>'
      //          });
      //       });
      //    }
      // });
      
      $('.select-tabs').on('change', function (e) {   /* select для адаптивности табов */
         let content = $('.catalog__content');
         // content.eq($(this).val()).addClass('catalog__content_active').siblings().removeClass('catalog__content_active');
         content.eq($(this).val()).fadeIn(500).siblings().fadeOut();
         $(this).fadeIn();
         $('.section__title').fadeIn('fast');
		});
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() { /* табы (не забудь html) */
         $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
   });
   

   // links
   $(function link (){
      $('a.catalog-item__link').each(function(i){
         $(this).on('click', function(e){
            e.preventDefault();
            $('div.catalog-item__wrap').eq(i).css('left', '0');
         });
      });
      $('a.catalog-item__back').each(function(i){
         $(this).on('click', function(e){
            e.preventDefault();
            $('div.catalog-item__wrap').eq(i).css('left', '101%');
         });
      });
   });


   // modal  
   $(function modal(){
      $('[data-modal=consultation]').on('click', function(){
         $('.overlay,#consultation').fadeIn('slow');
      });

      $('.button__tabs').each(function(i){
         $(this).on('click', function(){
            $('.overlay,#order').fadeIn('slow');
            $('#order .modal__descr_buy').text($('.catalog-item__subtitle').eq(i).text());
         });
      });

      $('.close').on('click', function(){
         $('.overlay,#consultation').fadeOut('slow');
         $('input').val('').removeClass('error');
         $('form label').css('display', 'none');
      });
   });

   // validate   https://jqueryvalidation.org/ - документаиция
   function validateForm(form){
      $(form).validate({
         rules:{
            name: {
               required: true,
               minlength: 2
            },
            phone: "required",
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            name: {
               required: 'Пожалуйста, введите ваше имя!',
               minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Введите свой номер телефона!",
            email: {
               required: "Введите свой почтовый адрес",
               email: "Не правильно введена почта!"
            }
         }
      });
   }

   validateForm('#consultation form');
   validateForm('#order form');
   validateForm('.consultation form');
   // mask маска ввода  https://github.com/digitalBush/jquery.maskedinput- документация

   $('[name=phone]').mask("+3-(999)-999-9999");  /* конфликтуе с type="number" в HTML - надо удалить */

   // отправка писем с сайта c использованием ajax и phpMailer 
   $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "phpmailer/smart.php",
         data: $(this).serialize()  /* данные кот. отпр. на серв. */
      }).done(function(){           /* при отправке формы ищезают и появляется окно с благодарностью и очищаются input */
         $(this).find('input').val("");
         $('#consultation , #order').fadeOut();
         $('.overlay , #thanks').fadeIn('slow');
         $('form').trigger('reset');
      });
      return false;
   });
   // плавный скрол вверх http://history-of-blog.ru/verstka-sajtov/plavnaya-prokrutka-do-yakorya-na-jquery-luchshij-skript/

   $(window).scroll(function(){
      if($(this).scrollTop() > 1000){
         $('.page-up').fadeIn();
      }else{
         $('.page-up').fadeOut();
      }
   });

   $("a[href^='#up']").click(function(){     /* можно использовать на локальные ссылки */
      let _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
   });
   // библиотека wow.js нужна для анимаций
   new WOW().init();
});
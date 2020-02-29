window.addEventListener('DOMContentLoaded', function () {
   function slider () {       /* слайдер (незабудт HTML структуру) */
     'use strict';
      let   slideIndex = 1,
            carouselImg = document.querySelectorAll('.carousel__img'),
            next = document.querySelector('.next'),
            prev = document.querySelector('.prev');

      showSlide(slideIndex);  
      
      
      function showSlide (n) {
         if(n > carouselImg.length){
            slideIndex = 1;
         }
         if(n < 1){
            slideIndex = carouselImg.length;
         }

         carouselImg.forEach((item) => {
            item.classList.remove('active');
         });

         carouselImg[slideIndex - 1].classList.add('active');
      }

      next.addEventListener('click', function(){
         showSlide(slideIndex +=1);
      });

      prev.addEventListener('click', function(){
         showSlide(slideIndex -=1);
      });

   }
   slider ();
// ---------------------------------------------------------------
   function tabs() {    /* скрипт для табов (незабудт HTML структуру) */
      let tabs = document.querySelector('.catalog__tabs'),
      content = document.querySelectorAll('.catalog__content'),
      tab = document.querySelectorAll('.catalog__tab'),
      select = document.querySelector('.select-tabs'),
      option = document.querySelectorAll('.target'),
      block = document.querySelectorAll('.click');

      for(let i = 0; i < block.length; i++) {
         block[i].addEventListener('click', function(){
            tab.forEach((item) => {
               item.classList.remove('catalog__tab_active');
            });
            if(block[i].parentNode.classList.contains('catalog__tab')){
               hideContent(0);
               showContent(i);
               tab[i].classList.add('catalog__tab_active');
            }
         });
      }


      function hideContent(a) {
         tab.forEach((item) =>{
            item.classList.remove('catalog__tab_active');
         });
         for( let i = a; i < content.length; i++ ){
            content[i].classList.remove('catalog__content_active');
         }
      }

      function showContent(b) {
         if(!content[b].classList.contains('catalog__content_active')){
            content[b].classList.add('catalog__content_active');
         }
      }

      tabs.addEventListener('click', function(event){
         target = event.target;
         if(target && target.classList.contains('catalog__tab')){
            for(let i = 0 ; i < tab.length; i++){
               if(target == tab[i]){
                  hideContent(0);
                  showContent(i);
                  target.classList.add('catalog__tab_active');
                  break;
               }
            }
         }
      });

      // select.addEventListener('change', function(event){
      //    for(let i = 0; i < content.length; i++){
      //       hideContent(0);
      //       for(let i = 0; i < option.length; i++){
      //          if(option.value == content[i]){
      //             showContent(i);
      //          }
      //       }
      //    }
      // });

   }
   tabs();
// ---------------------------------------------------------------------------------
   // function links (){            /* выезжающий контент с боку ну или он просто появляеться */
   //    let link = document.querySelectorAll('.catalog-item__link'),
   //    back = document.querySelectorAll('.catalog-item__back'),
   //    contentItem = document.querySelectorAll('.catalog-item__wrap');

   //    function showContentItem (){
   //       for(let i = 0; i < link.length; i++ ){
   //          link[i].addEventListener('click', function(event){
   //             event.preventDefault();
   //             contentItem.forEach((item) => {
   //                contentItem[i].style.left = '0';
   //             });
   //          });
   //       }
   //       // ---------------------------------------------------------------
   //       // link.forEach((item) => {
   //       //    item.addEventListener('click', function(event){
   //       //       event.preventDefault();
   //       //       contentItem.forEach((item2) => {
   //       //          if( item2 == item){
   //       //             item2.style.left = '0';
   //       //          }
   //       //       });
   //       //    });
   //       // });
   //    }
   //    showContentItem ();

   //    function closeContent(){
   //       for(let i = 0; i < back.length; i++ ){
   //          back[i].addEventListener('click', function(event){
   //             event.preventDefault();
   //             contentItem.forEach((item1) => {
   //                contentItem[i].style.left = '101%';
   //             });
   //          });
   //       }
   //    }
   //    closeContent();
   // }
   // links ();
// -----------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!
   function slideTabs () {       /* Скрипт для табов когда их нужно адаптировать (незабудт HTML структуру) */
      let tabIndex = 1,
      next = document.querySelector('.next-arrow'), /* кнопка next */
      prev = document.querySelector('.prev-arrow'), /* кнопка prev */
      tab = document.querySelectorAll('.catalog__tab'),  /* масив табов */
      content = document.querySelectorAll('.catalog__content'); /* отображаемый контент */

      showTab(tabIndex);

      function showTab(a) {
         if(a < 1){
            tabIndex = tab.length;
         }

         if(a > tab.length){
            tabIndex = 1;
         }
         tab.forEach((item) => {
            item.classList.remove('catalog__tab_active');
         });
         tab[tabIndex - 1].classList.add('catalog__tab_active');
      }

      next.addEventListener('click', function(){
         showTab(tabIndex += 1);
         for(let i = 0; i < content.length; i++){
            content[i].classList.remove('catalog__content_active');
         }
         content[tabIndex - 1].classList.add('catalog__content_active');
      });


      prev.addEventListener('click', function(){
         showTab(tabIndex -= 1);
         for(let i = 0; i < content.length; i++){
            content[i].classList.remove('catalog__content_active');
         }
         content[tabIndex - 1].classList.add('catalog__content_active');
      });
   }
   slideTabs ();
// ---------------------------------------------------------------------!!!!!!!!!!!!!
   const links = document.querySelectorAll('.catalog-item__link'),/* выезжающий контент с боку ну или он просто появляеться */
      backs = document.querySelectorAll('.catalog-item__back');

      function toggle(elems) {
         elems.forEach((elem, i) => {
            elem.addEventListener('click', (e) => {
               e.preventDefault();
               document.querySelectorAll('.catalog-item__wrap')[i].classList.toggle('catalog-item__wrap_active');
               // document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active');
            });
         });
      }
      
   toggle(links);
   toggle(backs);
   // --------------------------------------------------------------------------
   function modal () {     /* модальные окна */
      let att = document.querySelectorAll('[data-modal=consultation]'),
      overlay = document.querySelector('.overlay'),
      consultation = document.querySelector('#consultation'),
      close = document.querySelectorAll('.close'),
      buttonTabs = document.querySelectorAll('.button__tabs'),
      order = document.querySelector('#order'),
      formConsultation = document.querySelector('#form2'),
      thanks = document.querySelector('#thanks');

      close.forEach((item)=> {
         item.addEventListener('click', function(){
            overlay.style.display = 'none';
            consultation.style.display = 'none';
            order.style.display = 'none';
            thanks.style.display = 'none';
         });
      });

      att.forEach((item)=> {
         item.addEventListener('click', function(){
            overlay.style.display = 'block';
            consultation.style.display = 'block';
            formConsultation.style.display = 'block';
         });
      });

      buttonTabs.forEach((item,i) => {
         item.addEventListener('click', function(){
            let modalDescr = document.querySelector('#order .modal__descr'),
            itemTitle = document.querySelectorAll('.catalog-item__subtitle');

            overlay.style.display = 'block';
            order.style.display = 'block';
            
            modalDescr.textContent = itemTitle[i].innerText;   /* тут была загвоздка))) */
            // console.log(itemTitle[i]);
            
            // modalDescr.textContent = itemTitle[i];
         });
         
      });
      
   }
   modal ();

// ----------------------------------------------------------------
   // function form (){
   //    let message = {   /* сообщения для отслеживания состояния запросса */
   //       loading: 'Загрузка...',
   //       succes: 'Спасибо! Мы скоро с вами свяжемся!',
   //       failure: 'Что-то пошло не так...',
   //       buy: 'Спасибо за покупку!'
   //    };

   //    let form = document.querySelectorAll('.feed-form'),  /* форма одна или несколько */
   //    input = document.getElementsByTagName('input'),       /* инпуты в форме */
   //    modalThanks = document.querySelector('#thanks'), /* Сообщение о благодарности и тд... */
   //    modal = document.querySelectorAll('.modal'),   /* модальные окна */
   //    statusMassage = document.createElement('div');

   //    statusMassage.style.color = '#f2f2f2';
   //    statusMassage.style.marginTop = '10px';
   //    statusMassage.style.textAlign = 'center';
   //    statusMassage.classList.add('status');  /* Стили для statusMassage нужно прописать в CSS */

   //    for(let i = 0; i < form.length; i++){
   //       form[i].addEventListener('submit', function(e){
   //          e.preventDefault();
   //          form[i].appendChild(statusMassage); /* добавляем сообщение в конец формы */

   //          let request = new XMLHttpRequest(); /* Создаем запросс  */

   //          request.open('POST','server.php' );    /* ('POST или GET', php файл куда будут отправляться запроссы) */
   //          request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded'); /*Контент данных с формы */
   //          // request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); /* если нужно отправить в JSON формате (заменяем строку кода) */

   //          let formData = new FormData(form[i]); /* получает данные которые ввел пользователь */

   //          // let obj = {};                                /*  */
   //          // formData.forEach(function(value, key) {
   //          //       obj[key] = value;                      /* если нужно JSON (заменять ничего не нужно)*/
   //          // });
   //          // let json = JSON.stringify(obj);              /*  */

   //          request.send(formData); /* body запросса - отправляет на сервер(можно открыть Open server                            и глянуть в инстр.разр    вкладку Network server.php файл) */

   //          // request.send(json);/* если нужно в JSON формате (заменяем request.send(formData); ) */

   //          request.addEventListener('readystatechange', function(){  /*наблюдаем за изменениями состояния запросса */
   //             if(request.readyState < 4){  /* если форма отправленна но данные не получены то выводим сообщение */
   //             } else if (request.readyState === 4 && request.status == 200){ /* если форма отправленна и данные получены */
   //                modal.forEach((item) =>{
   //                   item.style.display = 'none';
   //                });
   //                modalThanks.style.display = 'block'; /* лучше добавлять классы с свойствами display */
   //                statusMassage.textContent = message.succes;
   //             }else {     /* если что-то сломалось */
   //                statusMassage.textContent = message.failure;
   //             }
   //          });
   //          for (let i = 0; i < input.length; i++){
   //             input[i].value = '';
   //             statusMassage.textContent = '';
   //          }
   //       });
   //    }
      
   // }
   // form ();
});

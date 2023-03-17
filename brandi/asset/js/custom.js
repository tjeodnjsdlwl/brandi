// nav_search

$(function(){ //start


  /**
   * @cate
   * @전체 
   * @트렌드 1
   * @브랜드 2
   * @뷰티 3
   * @라이프 4 
   * 
   * 
   * @theme
   * @오늘은 이 상품 어때요? = 1;
   * @상품은 내일 도착! = 2;
   * @상품은 mdpick = 3;
   * @TODAY 카테고리 베스트 = 4
   * 
   */

  function produectList(frame,themeNum,cateNum){

    fetch('./asset/data/productData.json')
    .then((response) => response.json())
    .then((json) => {
        data = json.items;

        var result = data.filter(function (parm) {return parm.theme == themeNum })

        if(themeNum == 4 && cateNum){ // 테마가 4번이면서 카테값을 줬을때!
          result = result.filter(function (parm) {return parm.cate == cateNum })
        }

        let html = '';
        deliEl = `<img class="delivery-fast" src="./asset/images/quick_delivery.png" alt="">`;
  
        result.forEach(element => {
          isDeli = (element.snipet.deliveryFast) ? deliEl : "";
          isSlide = (element.theme === 3) ? 'siwper-slide' : '';


           html+=` <a class="wrap-prod ${isSlide}" href="">
           <div class="thumb">
             <img src="${element.snipet.thumb}" alt>
           </div>
           <div class="wrap-info">
             <div class="store-info">
               <em class="seller">${element.snipet.seller}</em>
               ${isDeli}
             </div>
             <div class="prod-info">
               <em class="desc">${element.snipet.title}</em>
             </div>
             <div class="price-info">
               <strong class="discount">${element.snipet.price.discount}%</strong>
               <strong class="price">${element.snipet.price.curr}원</strong>
             </div>
           </div>
         </a>`;
        });
        $(frame).html(html);
    })
  }

  produectList('#list1',1);
  produectList('#list2',2);
  produectList('#list3',3);
  produectList('#list4',4); //모두 CATE라는걸 설정안함
  $('.sc-today-best .category-tab-item').click(function(e){
    e.preventDefault();
    cate = $(this).data('cate');
    $(this).addClass('on').siblings().removeClass('on');
    produectList('#list4',4,cate); //카테를 설정
  })















  $('#searchBtn').click(function(){
    $('.popup-search').addClass('active');
    $('body').addClass('hidden')
  })

  $('.overlay').click(function(){
    $('.popup-search').removeClass('active');
    $('body').removeClass('hidden')
  })


  // $('.util .btn-search').click(function(){
  //   $(this).siblings('.form-search').addclass('active');
  //   $(this).siblings('.overlay').addclass('active');
  // })
  // $('.util .overlay').click(function(){
  //   $(this).siblings('.form-search').removeclass('active');
  //   $(this).siblings('.overlay').removeclass('active');
  // })

// 헤더 스크롤

  $(window).scroll(function(){
    curr = $(this).scrollTop();
    target = $('.container').offset().top;
    console.log(target);
    if(curr >= target){
      $('.gnb').addClass('fix');
    }else{
      $('.gnb').removeClass('fix');
    }
  })

// slide01



  var swiper = new Swiper(".main-banner", {
    slidesPerView:1,
    // spaceBetween:10,
    loop: true,
    autoplay: true,
    speed: 1000,
    // centeredSlides:true,
    pagination:{
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  var swiper2 = new Swiper(".latest-block", {
    slidesPerView: 'auto',  
    spaceBetween:8,
  })

  var swiper3 = new Swiper(".wrap-recent-prd", {
    slidesPerView: 'auto',  
    spaceBetween: 8,

  })

  var swiper4 = new Swiper(".sub-banner", {
    slidesPerView: 'auto',  
    spaceBetween: 8,
  })

  var swiper5 = new Swiper(".md-wrap-box", {
    slidesPerView: 1.3,  
    spaceBetween: 8,
    pagination:false,
    navigation: false,
  })

// accordion



  $('.company-info-area .brand-title a').click(function(){
    const brandTit = $(this).parent();
    // console.log('brandTit');
    // brandTit.siblings('.hide-info').addClass('on');
    $('.company-info-area .brand-title,.footer .hide-info').toggleClass('on');
    // $('.company-info-area .hide-info').stop().toggle();
   
  })
  
// 탑버튼


  $(".top-btn").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
  });


// tab


  $('.category-tab-item').click(function(){
    target = $(this).attr('href');

    $(this).addClass('on').siblings().removeClass('on');
    $(target).addClass('on').siblings().removeClass('on');
  })


}) //end
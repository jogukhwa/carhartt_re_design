$("document").ready(function(){

    AOS.init();

    $("a").click(function(e){
        e.preventDefault();
    })

    $(".update-section .up-box h2").eq(0).addClass("on")
    $(".update-section .up-box img").eq(0).show()
    $(".update-section .up-box a").eq(0).addClass("active")

    $header = $(".header .main-header > div");
    $header_title = $(".header .main-header > div a");

    //헤더 메뉴 마우스오버 효과

    $header.mouseover(function(){
        let i = $(this).index()

        $header.removeClass("on").eq(i).addClass("on")
        $header_title.eq(i).css({
            transform: 'rotate(0deg)',
            top: '10%'
        })
    }).mouseout(function(){
        let i = $(this).index()
        $header.removeClass("on")
        $header_title.eq(i).css({
            transform: 'rotate(90deg)',
            top: '15%'
        })
    })


    //네비바 

    $(window).scroll(function(){

        let pos = $(window).scrollTop()
        let new_pos = Math.floor(pos / $(".header").height());
        if(new_pos >=1){
            $(".fixed-header").fadeIn()
        }else{
            $(".fixed-header").fadeOut()
        }
    })


    //new 슬라이드

    let swiper = new Swiper (".new-main-image",{
        autoplay : {
            delay : 3000
        },
        effect: "fade",
        speed : 500
    })

    //vista 모달창


    $vista_box = $(".vista .product-box")
    $vista_x = $(".vista-modal .modal-detail i")
    



    $vista_box.click(function(e){
        let i = $vista_box.index(this);
        $(".window").fadeIn('linear');
        $(".vista-modal").fadeIn(800);
        $(".vista-modal .modal-box").removeClass("on").eq(i).addClass("on")

    })

    $vista_x.click(function(e){
        e.preventDefault();
        $(".vista-modal").hide()
        $(".window").hide()
    })


    //상품 마우스오버

    $product = $(".car-product-box .product-content")



    $product.mouseover(function(){
        let i =  $product.index(this)
        $product.removeClass("on").eq(i).addClass("on")
    }).mouseout(function(){
        $product.removeClass("on")
    })



    //업데이트 마우스오버

    $update_list = $(".update-section .up-box");

    $update_list.mouseover(function(){
        let i = $(this).index()

        $(".update-section .up-box h2").removeClass("on").eq(i-1).addClass("on")
        $(".update-section .up-box img").hide().eq(i-1).show()
        $(".update-section .up-box a").removeClass("active").eq(i-1).addClass("active")
    })






})//jq
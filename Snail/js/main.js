$(function () {
    let count = 1;
    
    $('.btn').on('click',function(){
        count++;
       
        let block = $('right_logo1');
        if(count % 2 == 0){
            $('.btn').addClass('active');
            $('.menu').addClass('active');
            $('.main').addClass('active');
            $('.aside_right').addClass('active');
            block.disabled;

        }else{
            $('.btn').removeClass('active');
            $('.menu').removeClass('active');
            $('.main').removeClass('active');
            $('.aside_right').removeClass('active');
        }
        console.log(count);
    });

    $('.main').on('click',function(){  
        if($('.btn').hasClass('active')){
            $('.btn').removeClass('active');
            $('.menu').removeClass('active');
            $('.main').removeClass('active');
            $('.aside_right').removeClass('active');
            
            count++;
            console.log(count);
        }
    });
    $('.aside_right').on('click',function(){  
        if($('.btn').hasClass('active')){
            $('.btn').removeClass('active');
            $('.menu').removeClass('active');
            $('.main').removeClass('active');
            $('.aside_right').removeClass('active');
        
            count++;
            console.log(count);
        }
    });


   

      $(window).on('wheel', function(e){
        
        if(e.originalEvent.wheelDelta < 0 && $('.main').hasClass('second')){
            $('.main').removeClass('second');
            console.log('third'); 
            $('.main').addClass('third');
        }if(e.originalEvent.wheelDelta > 0 && $('.main').hasClass('second')){
            $('.main').removeClass('second');
            console.log('first'); 
        }
        if(e.originalEvent.wheelDelta > 0 && $('.main').hasClass('third')){
            $('.main').removeClass('third');
            console.log('second'); 
            $('.main').addClass('second');
        }if(e.originalEvent.wheelDelta < 0){
            console.log('scrolling down !'); 
            $('.main').addClass('second');
        } 


     
    });


    $('.nav_up').on('click',function(){  
        
        if($('.main').hasClass('second') && !$('.main').hasClass('third')){
            $('.main').removeClass('second');
            
        }else if($('.main').hasClass('second') && $('.main').hasClass('third')){
            $('.main').removeClass('third');
        }else if(!$('.main').hasClass('second') && !$('.main').hasClass('third')){
            $('.nav_up').css({'cursor': 'default'});
        }
    });
   
    $('.nav_down').on('click',function(){  
        
        if(!$('.main').hasClass('second')){
            $('.main').addClass('second');
        }else if($('.main').hasClass('second')){
            $('.main').addClass('third');
        }
        
    });
   

    $('.back').on('click',function(){  
        $('.main').removeClass('third');
        $('.main').addClass('second');
    });
});
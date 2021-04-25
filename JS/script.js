$(Document).ready(function(){
    $('.tab').not('.naturepreservation' ).hide('1000');
   $('.tabs').click(function(){
       const tab = $(this).attr('data-filter');
       if($('.naturepreservation').hasClass('active'))
       {
           $('.naturepreservation').show('1000');
           
       }
       else{
           $('.tab').not('.'+tab).hide('1000');
           $('.tab').filter('.'+tab).show('1000');
       }
   })

   $('.tabs').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
   })
})

AOS.init();
//Parallax 
const header = document.getElementById("header");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    //console.log(offset);
    header.style.backgroundPositionY = - offset * 0.4 + "px";
})

const position = document.documentElement;
position.addEventListener("mousemove", event =>{
    position.style.setProperty('--x',event.clientX + "px");
    position.style.setProperty('--y',event.clientY + "px");
})

const bannerHeading = document.querySelector(".banner-head");
bannerHeading.innerHTML = bannerHeading.textContent.replace(/\S/g , "<span>$&</span>");


anime.timeline({
    loop:false
})
.add({
    targets:'.banner-head span ',
    translateY:[-600,0],
    scale:[10,1],
    opacity:[0,1],
    easing:"easeOutExpo",
    duration:1000,
    delay:anime.stagger(100),
})
.add({
    targets:'.banner-head span ',
    translateY:[-600,0],
    scale:[10,1],
    opacity:[0,1],
    easing:"easeOutExpo",
    duration:1000,
    delay:anime.stagger(100),
})

.add({
    targets:'.CTA-btn',
    scale:[0,1],
    opacity:[0,1],
    easing:"easeOutExpo",
    duration:500,
    delay:anime.stagger(100),
})

const timeline2 = anime.timeline({
    targets:'.leaf',
    easing:'easeInOutExpo',
    loop:true
}) 

timeline2.add({
    rotate: function(){
        return anime.random(-360,360);
    },
    translateX: function(){
        return anime.random(-180,90)
    },
    translateY: function(){
        return anime.random(-10,90)
    },

    duration:5000,
    delay:anime.stagger(100)

})

timeline2.add({
    rotate:0,
    translateX: 0,
    translateY: 0,
    duration:5000,
    delay:anime.stagger(100),
   
})
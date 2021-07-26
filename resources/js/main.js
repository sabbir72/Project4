$(document).ready(function(){

//sticky-menu
 $(".js-services").waypoint(function(direction){
   if(direction=="down"){
     $("nav").addClass("sticky");
   } else {
     $("nav").removeClass("sticky");
   }
 });
  //smooth scrooll
  $("a").on('click',function(event){

    if(this.hash !=="") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop:$(hash).offset().top
        }, 800,function(){
          window.location.hash = hash;
        });
    }
  });
  //mixitup(portfolio-section)
  var mixer = mixitup('.container');
});

function openNav(){
  document.getElementById("myNav").style.width="100%";
}

function closeNav(){
  document.getElementById("myNav").style.width="0%";
}

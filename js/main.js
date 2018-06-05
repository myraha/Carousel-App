var carousel = ["images/uno.jpg","images/dos.jpg","images/tres.jpg","images/quattro.jpg","images/cinco.jpg"];

$(document).ready(function(){
 var pictureIndex = 0
 $('#back').on("click", function(){
   if(pictureIndex == 0 ){
     pictureIndex = carousel.length - 1
   }else{
     pictureIndex = pictureIndex - 1
   }
   $('#imgCarousel').attr('src', carousel[pictureIndex])
 })

 $('#skip').on("click", function(){
   if(pictureIndex == 4){
     pictureIndex = carousel.length - 5;
   }else{
     pictureIndex++
   }
   $('#imgCarousel').attr('src', carousel[pictureIndex])
   console.log(pictureIndex)
 })
});

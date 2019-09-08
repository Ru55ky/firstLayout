var btn = document.querySelector('.burger');
btn.addEventListener("click", function (evt) { 
    evt.preventDefault();
    btn.classList.toggle('burger_active');
 });


 /*POPUP*/
 let Openpopup = document.querySelector('.Subscribe');
 let popup = document.querySelector('.container-popup');
 let input = document.querySelector('.popup-input');
 Openpopup.addEventListener("click", function () { 
     popup.classList.add('popup-close');

  });
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        popup.classList.remove('popup-close');
    }
});
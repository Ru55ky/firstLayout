var btn = document.querySelector('.burger');
btn.addEventListener("click", function (evt) { 
    evt.preventDefault();
    btn.classList.toggle('burger_active');
 });